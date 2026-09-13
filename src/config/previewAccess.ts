/**
 * Public Preview Configuration for Uni Route Pakistan
 *
 * PUBLIC ACCESS WITHOUT LOGIN:
 * - 10 Designated International University Profiles
 * - 5 Designated Governmental Scholarship Profiles
 * - Homepage / Landing page
 *
 * ALL OTHER CONTENT REQUIRES AUTHENTICATION (SUPABASE AUTH)
 */

export const PUBLIC_INTERNATIONAL_UNIVERSITY_IDS: string[] = [
  'uni-001', // Harvard University
  'uni-002', // Massachusetts Institute of Technology (MIT)
  'uni-003', // Stanford University
  'uni-004', // University of Oxford
  'uni-005', // University of Cambridge
  'uni-006', // ETH Zurich
  'uni-007', // Imperial College London
  'uni-008', // National University of Singapore (NUS)
  'uni-009', // University of Tokyo
  'uni-010', // University of Toronto
];

export const PUBLIC_GOVERNMENT_SCHOLARSHIP_IDS: string[] = [
  'gov-chevening-uk',    'chevening-uk',
  'gov-fulbright-usa',   'fulbright-us',
  'gov-mext-japan',      'mext-japan',
  'gov-turkiye-burslari', 'erasmus-mundus',
  'gov-csc-china',       'daad-germany'
];

/**
 * Checks if a university ID is part of the 10 public preview international universities
 */
export function isPublicInternationalUniversity(id?: string): boolean {
  if (!id) return false;
  return PUBLIC_INTERNATIONAL_UNIVERSITY_IDS.includes(id);
}

/**
 * Checks if a government scholarship ID is part of the 5 public preview governmental scholarships
 */
export function isPublicGovernmentScholarship(id?: string): boolean {
  if (!id) return false;
  return PUBLIC_GOVERNMENT_SCHOLARSHIP_IDS.includes(id);
}
