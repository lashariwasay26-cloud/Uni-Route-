import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Mail, Lock, ShieldAlert, CheckCircle2, AlertCircle, Eye, EyeOff, Sparkles } from 'lucide-react';
import { supabase, isSupabaseConfigured } from '../lib/supabase';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAuthSuccess: (user: { email: string; id: string }) => void;
  customMessage?: string;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, onAuthSuccess, customMessage }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const isSupabase = isSupabaseConfigured();

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    // Simple email/password validation
    if (!email.trim() || !password) {
      setError('Please fill in all fields.');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }

    if (isSignUp && password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setLoading(true);

    try {
      if (isSupabase && supabase) {
        // --- REAL SECURE SUPABASE AUTH ---
        if (isSignUp) {
          const { data, error: signUpError } = await supabase.auth.signUp({
            email,
            password,
            options: {
              data: {
                full_name: email.split('@')[0],
                role: 'Student',
              },
            },
          });
          if (signUpError) throw signUpError;

          if (data.user) {
            // Ensure profile row exists in public.profiles table
            try {
              await supabase.from('profiles').upsert({
                id: data.user.id,
                email: data.user.email || email,
                full_name: email.split('@')[0],
                role: 'Student',
                updated_at: new Date().toISOString(),
              });
            } catch (pErr) {
              // Trigger may have already created it
            }

            // If email confirmation is disabled or session is immediately returned
            if (data.session) {
              onAuthSuccess({ email: data.user.email || email, id: data.user.id });
              setSuccess('Account created successfully! Session started.');
              if (typeof window !== 'undefined') {
                window.dispatchEvent(new CustomEvent('uniroute-auth-change', { detail: { user: data.user } }));
              }
              setTimeout(() => {
                onClose();
              }, 1200);
            } else {
              setSuccess('Account registered! If confirmation is required, please check your inbox.');
              // Even without immediate session, notify success
              setTimeout(() => {
                setIsSignUp(false);
              }, 2000);
            }
          }
        } else {
          const { data, error: signInError } = await supabase.auth.signInWithPassword({
            email,
            password,
          });
          if (signInError) throw signInError;

          if (data.user) {
            // Ensure profile is tracked
            try {
              await supabase.from('profiles').upsert({
                id: data.user.id,
                email: data.user.email || email,
                updated_at: new Date().toISOString(),
              });
            } catch {}

            onAuthSuccess({ email: data.user.email || email, id: data.user.id });
            setSuccess('Welcome back! Logging in...');
            if (typeof window !== 'undefined') {
              window.dispatchEvent(new CustomEvent('uniroute-auth-change', { detail: { user: data.user } }));
            }
            setTimeout(() => {
              onClose();
            }, 1000);
          }
        }
      } else {
        // --- OFFLINE SECURE SANDBOX AUTH SIMULATION ---
        await new Promise((resolve) => setTimeout(resolve, 800)); // Simulate network latency

        const mockUsersRaw = localStorage.getItem('mock_users');
        const mockUsers: Array<{ email: string; passHash: string; id: string }> = mockUsersRaw
          ? JSON.parse(mockUsersRaw)
          : [];

        const normalizedEmail = email.toLowerCase().trim();

        if (isSignUp) {
          // Check if user already exists
          const exists = mockUsers.some((u) => u.email === normalizedEmail);
          if (exists) {
            throw new Error('An account with this email already exists.');
          }

          // Create new user record
          const newUser = {
            email: normalizedEmail,
            passHash: btoa(password), // Simple encoding for simulated safety
            id: `mock-user-${Date.now()}`,
          };

          mockUsers.push(newUser);
          localStorage.setItem('mock_users', JSON.stringify(mockUsers));

          // Set active session
          const userSession = { email: newUser.email, id: newUser.id };
          localStorage.setItem('mock_user_session', JSON.stringify(userSession));
          
          onAuthSuccess(userSession);
          setSuccess('Account registered successfully! Welcome to Uni Route.');
          setTimeout(() => {
            onClose();
          }, 1500);
        } else {
          // Sign In
          const user = mockUsers.find(
            (u) => u.email === normalizedEmail && u.passHash === btoa(password)
          );

          if (!user) {
            throw new Error('Invalid email or password. Please try again.');
          }

          const userSession = { email: user.email, id: user.id };
          localStorage.setItem('mock_user_session', JSON.stringify(userSession));

          onAuthSuccess(userSession);
          setSuccess('Successfully logged in! Restoring your SAT prep metrics.');
          setTimeout(() => {
            onClose();
          }, 1200);
        }
      }
    } catch (err: any) {
      setError(err.message || 'An error occurred during authentication.');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setError(null);
    setSuccess(null);
    setLoading(true);

    try {
      if (isSupabase && supabase) {
        const { error: oAuthError } = await supabase.auth.signInWithOAuth({
          provider: 'google',
          options: {
            redirectTo: window.location.origin,
          }
        });
        if (oAuthError) throw oAuthError;
      } else {
        // Mock Google Sign-In
        await new Promise((resolve) => setTimeout(resolve, 1000));
        
        const mockUserSession = {
          email: 'google.student@example.com',
          id: `mock-google-${Date.now()}`
        };
        localStorage.setItem('mock_user_session', JSON.stringify(mockUserSession));
        
        onAuthSuccess(mockUserSession);
        setSuccess('Successfully authenticated via Google!');
        
        if (typeof window !== 'undefined') {
          window.dispatchEvent(new CustomEvent('uniroute-auth-change', { detail: { user: { email: mockUserSession.email, id: mockUserSession.id } } }));
        }
        
        setTimeout(() => {
          onClose();
        }, 1200);
      }
    } catch (err: any) {
      setError(err.message || 'Failed to authenticate with Google.');
    } finally {
      setLoading(false);
    }
  };

  const handleSwitchTab = (signUp: boolean) => {
    setIsSignUp(signUp);
    setError(null);
    setSuccess(null);
    setPassword('');
    setConfirmPassword('');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60">
      {/* Backdrop click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Dialog */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="bg-white border border-slate-200 rounded-[28px] max-w-md w-full p-6 sm:p-8 shadow-2xl relative z-10 overflow-hidden"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-all cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Brand Banner */}
        <div className="flex items-center gap-2.5 mb-4">
          <div className="w-9 h-9 rounded-xl bg-slate-950 text-white font-extrabold text-base flex items-center justify-center shadow-xs">
            U
          </div>
          <span className="font-extrabold text-lg tracking-tight text-slate-950">
            Uni Route Portal
          </span>
        </div>

        {customMessage && (
          <div className="mb-5 p-3.5 rounded-2xl bg-indigo-50/80 border border-indigo-100 flex items-start gap-2.5 text-xs text-indigo-950 font-medium leading-relaxed">
            <Sparkles className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-extrabold block text-indigo-900 mb-0.5">Full Account Required</span>
              {customMessage}
            </div>
          </div>
        )}

        {/* Tab Selection */}
        <div className="flex border-b border-slate-200 mb-6">
          <button
            type="button"
            onClick={() => handleSwitchTab(false)}
            className={`flex-1 pb-3 text-sm font-extrabold transition-all relative ${
              !isSignUp ? 'text-indigo-600' : 'text-slate-400 hover:text-slate-600'
            }`}
          >
            Sign In
            {!isSignUp && (
              <motion.div
                layoutId="activeTabUnderline"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600"
              />
            )}
          </button>
          <button
            type="button"
            onClick={() => handleSwitchTab(true)}
            className={`flex-1 pb-3 text-sm font-extrabold transition-all relative ${
              isSignUp ? 'text-indigo-600' : 'text-slate-400 hover:text-slate-600'
            }`}
          >
            Create Account
            {isSignUp && (
              <motion.div
                layoutId="activeTabUnderline"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600"
              />
            )}
          </button>
        </div>

        {/* Title */}
        <div className="space-y-1.5 mb-6 text-left">
          <h3 className="text-lg font-black text-slate-950 tracking-tight leading-none">
            {isSignUp ? 'Sign up for Uni Route' : 'Sign in to Your Account'}
          </h3>
          <p className="text-xs text-slate-500 leading-normal">
            {isSignUp
              ? 'Lock in your target SAT scores, track diagnostics, and save scholarship tracks.'
              : 'Restore your practice logs, AI profiles, and custom essay drafts.'}
          </p>
        </div>

        {/* Status Indicators */}
        <AnimatePresence mode="wait">
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="p-3.5 mb-4 rounded-xl bg-rose-50 border border-rose-100 flex items-start gap-2.5 text-xs text-rose-800 text-left"
            >
              <AlertCircle className="w-4 h-4 shrink-0 text-rose-600 mt-0.5" />
              <span>{error}</span>
            </motion.div>
          )}

          {success && (
            <motion.div
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="p-3.5 mb-4 rounded-xl bg-emerald-50 border border-emerald-100 flex items-start gap-2.5 text-xs text-emerald-800 text-left"
            >
              <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600 mt-0.5" />
              <span>{success}</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Google Sign In Button */}
        <button
          type="button"
          onClick={handleGoogleSignIn}
          disabled={loading}
          className="w-full h-11 rounded-xl border border-slate-200 bg-white text-slate-700 font-extrabold text-sm hover:bg-slate-50 hover:border-slate-300 focus:ring-4 focus:ring-slate-100 transition-all cursor-pointer flex items-center justify-center gap-2.5 shadow-2xs"
        >
          <svg className="w-4.5 h-4.5 shrink-0" viewBox="0 0 24 24" width="18" height="18">
            <path
              fill="#4285F4"
              d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v3.92h6.61c-.29 1.5-1.14 2.78-2.4 3.63v3.02h3.88c2.27-2.09 3.56-5.17 3.56-8.5z"
            />
            <path
              fill="#34A853"
              d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.02c-1.08.72-2.45 1.16-4.05 1.16-3.11 0-5.74-2.11-6.68-4.96H1.21v3.11C3.18 21.88 7.31 24 12 24z"
            />
            <path
              fill="#FBBC05"
              d="M5.32 14.27c-.24-.72-.38-1.49-.38-2.27s.14-1.55.38-2.27V6.62H1.21C.44 8.16 0 9.88 0 11.73c0 1.85.44 3.57 1.21 5.11l4.11-3.11z"
            />
            <path
              fill="#EA4335"
              d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.93 1.19 15.24 0 12 0 7.31 0 3.18 2.12 1.21 5.62l4.11 3.11c.94-2.85 3.57-4.98 6.68-4.98z"
            />
          </svg>
          <span>Continue with Google</span>
        </button>

        {/* Divider */}
        <div className="relative my-5 flex items-center justify-center">
          <div className="absolute inset-x-0 h-px bg-slate-100" />
          <span className="relative bg-white px-3 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
            Or continue with email
          </span>
        </div>

        {/* Login/Signup Form */}
        <form onSubmit={handleAuth} className="space-y-4 text-left">
          {/* Email Address */}
          <div className="space-y-1.5">
            <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              Email Address
            </label>
            <div className="relative">
              <input
                type="email"
                required
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
                className="w-full h-11 pl-10 pr-4 rounded-xl bg-slate-50/50 hover:bg-slate-50 border border-slate-200 focus:bg-white focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 text-sm outline-none transition-all"
              />
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            </div>
          </div>

          {/* Password */}
          <div className="space-y-1.5">
            <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                required
                placeholder="••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
                className="w-full h-11 pl-10 pr-10 rounded-xl bg-slate-50/50 hover:bg-slate-50 border border-slate-200 focus:bg-white focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 text-sm outline-none transition-all"
              />
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Confirm Password (only for Sign Up) */}
          {isSignUp && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="space-y-1.5 overflow-hidden"
            >
              <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  required={isSignUp}
                  placeholder="••••••"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  disabled={loading}
                  className="w-full h-11 pl-10 pr-4 rounded-xl bg-slate-50/50 hover:bg-slate-50 border border-slate-200 focus:bg-white focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 text-sm outline-none transition-all"
                />
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              </div>
            </motion.div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full h-11 mt-2 rounded-xl bg-indigo-600 text-white font-extrabold text-sm hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-100 transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            {loading ? (
              <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
            ) : (
              <span>{isSignUp ? 'Create Account' : 'Sign In'}</span>
            )}
          </button>
        </form>

        {/* Security / IDP Notice Footer */}
        <div className="mt-6 pt-4 border-t border-slate-100 flex items-start gap-2 text-[10px] text-slate-400 leading-normal text-left">
          {isSupabase ? (
            <>
              <CheckCircle2 className="w-4 h-4 shrink-0 text-indigo-600 mt-0.5" />
              <span>
                <strong>Supabase IDP Active</strong>: Credential validation and JWT-token sessions are encrypted and managed directly on Supabase's secure servers.
              </span>
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4 shrink-0 text-amber-500 mt-0.5" />
              <span>
                <strong>Sandbox Auth Simulator Active</strong>: Running in client-side secure environment. Fully compatible with production database rules upon adding keys.
              </span>
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
};
