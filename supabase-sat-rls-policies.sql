-- ==============================================================================
-- SUPABASE ROW LEVEL SECURITY (RLS) & PUBLIC READ POLICIES
-- FOR SAT READING, SAT WRITING, UNIVERSITIES, AND SCHOLARSHIPS
-- ==============================================================================
-- 
-- PROBLEM:
-- When Row Level Security (RLS) is turned ON without policies, Supabase defaults 
-- to DENYING all queries (SELECT, INSERT, UPDATE, DELETE). This causes the web app
-- to receive 0 rows / empty arrays or permission errors when fetching SAT chapters
-- and exercises.
--
-- SOLUTION:
-- 1. Enable RLS on all curriculum and reference data tables.
-- 2. Create a "Public Read Access" policy for SELECT that allows both 'anon'
--    (unauthenticated visitors) and 'authenticated' (logged-in users) to read.
-- 3. Restrict INSERT, UPDATE, and DELETE so random web visitors cannot modify
--    or delete test questions, explanations, or university records.
--
-- HOW TO RUN:
-- Open your Supabase Dashboard -> Go to "SQL Editor" -> New Query -> Paste this file -> Click "Run".
-- ==============================================================================

-- ==============================================================================
-- 1. SAT READING SECTION TABLES (Chapters 1 to 6 - Theory & Exercises)
-- ==============================================================================

-- SAT Reading Chapter 1
ALTER TABLE IF EXISTS public.sat_reading_ch1_theory ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public Read Access" ON public.sat_reading_ch1_theory;
CREATE POLICY "Public Read Access" ON public.sat_reading_ch1_theory FOR SELECT TO anon, authenticated USING (true);

ALTER TABLE IF EXISTS public.sat_reading_ch1_exercises ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public Read Access" ON public.sat_reading_ch1_exercises;
CREATE POLICY "Public Read Access" ON public.sat_reading_ch1_exercises FOR SELECT TO anon, authenticated USING (true);

-- SAT Reading Chapter 2
ALTER TABLE IF EXISTS public.sat_reading_ch2_theory ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public Read Access" ON public.sat_reading_ch2_theory;
CREATE POLICY "Public Read Access" ON public.sat_reading_ch2_theory FOR SELECT TO anon, authenticated USING (true);

ALTER TABLE IF EXISTS public.sat_reading_ch2_exercises ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public Read Access" ON public.sat_reading_ch2_exercises;
CREATE POLICY "Public Read Access" ON public.sat_reading_ch2_exercises FOR SELECT TO anon, authenticated USING (true);

-- SAT Reading Chapter 3
ALTER TABLE IF EXISTS public.sat_reading_ch3_theory ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public Read Access" ON public.sat_reading_ch3_theory;
CREATE POLICY "Public Read Access" ON public.sat_reading_ch3_theory FOR SELECT TO anon, authenticated USING (true);

ALTER TABLE IF EXISTS public.sat_reading_ch3_exercises ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public Read Access" ON public.sat_reading_ch3_exercises;
CREATE POLICY "Public Read Access" ON public.sat_reading_ch3_exercises FOR SELECT TO anon, authenticated USING (true);

-- SAT Reading Chapter 4
ALTER TABLE IF EXISTS public.sat_reading_ch4_theory ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public Read Access" ON public.sat_reading_ch4_theory;
CREATE POLICY "Public Read Access" ON public.sat_reading_ch4_theory FOR SELECT TO anon, authenticated USING (true);

ALTER TABLE IF EXISTS public.sat_reading_ch4_exercises ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public Read Access" ON public.sat_reading_ch4_exercises;
CREATE POLICY "Public Read Access" ON public.sat_reading_ch4_exercises FOR SELECT TO anon, authenticated USING (true);

-- SAT Reading Chapter 5
ALTER TABLE IF EXISTS public.sat_reading_ch5_theory ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public Read Access" ON public.sat_reading_ch5_theory;
CREATE POLICY "Public Read Access" ON public.sat_reading_ch5_theory FOR SELECT TO anon, authenticated USING (true);

ALTER TABLE IF EXISTS public.sat_reading_ch5_exercises ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public Read Access" ON public.sat_reading_ch5_exercises;
CREATE POLICY "Public Read Access" ON public.sat_reading_ch5_exercises FOR SELECT TO anon, authenticated USING (true);

-- SAT Reading Chapter 6
ALTER TABLE IF EXISTS public.sat_reading_ch6_theory ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public Read Access" ON public.sat_reading_ch6_theory;
CREATE POLICY "Public Read Access" ON public.sat_reading_ch6_theory FOR SELECT TO anon, authenticated USING (true);

ALTER TABLE IF EXISTS public.sat_reading_ch6_exercises ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public Read Access" ON public.sat_reading_ch6_exercises;
CREATE POLICY "Public Read Access" ON public.sat_reading_ch6_exercises FOR SELECT TO anon, authenticated USING (true);


-- ==============================================================================
-- 2. SAT WRITING SECTION TABLES (Chapters 1 to 7 - Theory & Exercises)
-- ==============================================================================

-- SAT Writing Chapter 1
ALTER TABLE IF EXISTS public.sat_writing_ch1_theory ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public Read Access" ON public.sat_writing_ch1_theory;
CREATE POLICY "Public Read Access" ON public.sat_writing_ch1_theory FOR SELECT TO anon, authenticated USING (true);

ALTER TABLE IF EXISTS public.sat_writing_ch1_exercises ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public Read Access" ON public.sat_writing_ch1_exercises;
CREATE POLICY "Public Read Access" ON public.sat_writing_ch1_exercises FOR SELECT TO anon, authenticated USING (true);

-- SAT Writing Chapter 2
ALTER TABLE IF EXISTS public.sat_writing_ch2_theory ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public Read Access" ON public.sat_writing_ch2_theory;
CREATE POLICY "Public Read Access" ON public.sat_writing_ch2_theory FOR SELECT TO anon, authenticated USING (true);

ALTER TABLE IF EXISTS public.sat_writing_ch2_exercises ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public Read Access" ON public.sat_writing_ch2_exercises;
CREATE POLICY "Public Read Access" ON public.sat_writing_ch2_exercises FOR SELECT TO anon, authenticated USING (true);

-- SAT Writing Chapter 3
ALTER TABLE IF EXISTS public.sat_writing_ch3_theory ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public Read Access" ON public.sat_writing_ch3_theory;
CREATE POLICY "Public Read Access" ON public.sat_writing_ch3_theory FOR SELECT TO anon, authenticated USING (true);

ALTER TABLE IF EXISTS public.sat_writing_ch3_exercises ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public Read Access" ON public.sat_writing_ch3_exercises;
CREATE POLICY "Public Read Access" ON public.sat_writing_ch3_exercises FOR SELECT TO anon, authenticated USING (true);

-- SAT Writing Chapter 4
ALTER TABLE IF EXISTS public.sat_writing_ch4_theory ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public Read Access" ON public.sat_writing_ch4_theory;
CREATE POLICY "Public Read Access" ON public.sat_writing_ch4_theory FOR SELECT TO anon, authenticated USING (true);

ALTER TABLE IF EXISTS public.sat_writing_ch4_exercises ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public Read Access" ON public.sat_writing_ch4_exercises;
CREATE POLICY "Public Read Access" ON public.sat_writing_ch4_exercises FOR SELECT TO anon, authenticated USING (true);

-- SAT Writing Chapter 5
ALTER TABLE IF EXISTS public.sat_writing_ch5_theory ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public Read Access" ON public.sat_writing_ch5_theory;
CREATE POLICY "Public Read Access" ON public.sat_writing_ch5_theory FOR SELECT TO anon, authenticated USING (true);

ALTER TABLE IF EXISTS public.sat_writing_ch5_exercises ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public Read Access" ON public.sat_writing_ch5_exercises;
CREATE POLICY "Public Read Access" ON public.sat_writing_ch5_exercises FOR SELECT TO anon, authenticated USING (true);

-- SAT Writing Chapter 6
ALTER TABLE IF EXISTS public.sat_writing_ch6_theory ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public Read Access" ON public.sat_writing_ch6_theory;
CREATE POLICY "Public Read Access" ON public.sat_writing_ch6_theory FOR SELECT TO anon, authenticated USING (true);

ALTER TABLE IF EXISTS public.sat_writing_ch6_exercises ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public Read Access" ON public.sat_writing_ch6_exercises;
CREATE POLICY "Public Read Access" ON public.sat_writing_ch6_exercises FOR SELECT TO anon, authenticated USING (true);

-- SAT Writing Chapter 7
ALTER TABLE IF EXISTS public.sat_writing_ch7_theory ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public Read Access" ON public.sat_writing_ch7_theory;
CREATE POLICY "Public Read Access" ON public.sat_writing_ch7_theory FOR SELECT TO anon, authenticated USING (true);

ALTER TABLE IF EXISTS public.sat_writing_ch7_exercises ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public Read Access" ON public.sat_writing_ch7_exercises;
CREATE POLICY "Public Read Access" ON public.sat_writing_ch7_exercises FOR SELECT TO anon, authenticated USING (true);


-- ==============================================================================
-- 3. UNIVERSITIES & SCHOLARSHIPS TABLES (From Screenshot 2)
-- ==============================================================================

-- International Universities & Details
ALTER TABLE IF EXISTS public.international_universities ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public Read Access" ON public.international_universities;
CREATE POLICY "Public Read Access" ON public.international_universities FOR SELECT TO anon, authenticated USING (true);

ALTER TABLE IF EXISTS public.international_university_programs ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public Read Access" ON public.international_university_programs;
CREATE POLICY "Public Read Access" ON public.international_university_programs FOR SELECT TO anon, authenticated USING (true);

ALTER TABLE IF EXISTS public.international_university_scholarships ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public Read Access" ON public.international_university_scholarships;
CREATE POLICY "Public Read Access" ON public.international_university_scholarships FOR SELECT TO anon, authenticated USING (true);

-- Pakistani Universities & Details
ALTER TABLE IF EXISTS public.pakistani_universities ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public Read Access" ON public.pakistani_universities;
CREATE POLICY "Public Read Access" ON public.pakistani_universities FOR SELECT TO anon, authenticated USING (true);

ALTER TABLE IF EXISTS public.pakistani_university_programs ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public Read Access" ON public.pakistani_university_programs;
CREATE POLICY "Public Read Access" ON public.pakistani_university_programs FOR SELECT TO anon, authenticated USING (true);

ALTER TABLE IF EXISTS public.pakistani_university_scholarships ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public Read Access" ON public.pakistani_university_scholarships;
CREATE POLICY "Public Read Access" ON public.pakistani_university_scholarships FOR SELECT TO anon, authenticated USING (true);

-- Government Scholarships
ALTER TABLE IF EXISTS public.government_scholarships ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public Read Access" ON public.government_scholarships;
CREATE POLICY "Public Read Access" ON public.government_scholarships FOR SELECT TO anon, authenticated USING (true);


-- ==============================================================================
-- 4. BULK VERIFICATION SCRIPT
-- (Optional loop: Ensures any table matching sat_* or universities has RLS + Read)
-- ==============================================================================
DO $$
DECLARE
  t text;
  table_list text[] := ARRAY[
    'sat_reading_ch1_theory', 'sat_reading_ch1_exercises',
    'sat_reading_ch2_theory', 'sat_reading_ch2_exercises',
    'sat_reading_ch3_theory', 'sat_reading_ch3_exercises',
    'sat_reading_ch4_theory', 'sat_reading_ch4_exercises',
    'sat_reading_ch5_theory', 'sat_reading_ch5_exercises',
    'sat_reading_ch6_theory', 'sat_reading_ch6_exercises',
    'sat_writing_ch1_theory', 'sat_writing_ch1_exercises',
    'sat_writing_ch2_theory', 'sat_writing_ch2_exercises',
    'sat_writing_ch3_theory', 'sat_writing_ch3_exercises',
    'sat_writing_ch4_theory', 'sat_writing_ch4_exercises',
    'sat_writing_ch5_theory', 'sat_writing_ch5_exercises',
    'sat_writing_ch6_theory', 'sat_writing_ch6_exercises',
    'sat_writing_ch7_theory', 'sat_writing_ch7_exercises',
    'international_universities', 'international_university_programs', 'international_university_scholarships',
    'pakistani_universities', 'pakistani_university_programs', 'pakistani_university_scholarships',
    'government_scholarships'
  ];
BEGIN
  FOREACH t IN ARRAY table_list LOOP
    IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_schema = 'public' AND table_name = t) THEN
      EXECUTE format('ALTER TABLE public.%I ENABLE ROW LEVEL SECURITY;', t);
      EXECUTE format('DROP POLICY IF EXISTS "Public Read Access" ON public.%I;', t);
      EXECUTE format('CREATE POLICY "Public Read Access" ON public.%I FOR SELECT TO anon, authenticated USING (true);', t);
    END IF;
  END LOOP;
END $$;
