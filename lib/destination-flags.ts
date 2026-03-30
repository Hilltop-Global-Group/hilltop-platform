/** ISO-style codes to flag / flag-map assets in /public/images */
export const DESTINATION_FLAG_SRC: Record<string, string> = {
  GH: '/images/ghana_flag.webp',
  RW: '/images/Flag_map_of_Rwanda.png',
  NG: '/images/Nigeria_Flag.webp',
  KE: '/images/Kenya_flag.webp',
  NA: '/images/Namibia_flag.webp',
  ZA: '/images/south_africa.webp',
};

/** Focal destinations (no Tanzania) for lists and copy */
export const FOCAL_DESTINATION_CODES = ['GH', 'RW', 'NG', 'KE', 'NA', 'ZA'] as const;
