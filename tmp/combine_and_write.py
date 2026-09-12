import json
import sys
sys.path.append('/tmp')

from generate_asian_1_7 import scholarships_1_7
from generate_asian_8_14 import scholarships_8_14

all_asian = scholarships_1_7 + scholarships_8_14

print(f"Total Asian scholarships: {len(all_asian)}")

for i, sch in enumerate(all_asian, 1):
    num_sections = len(sch.get('fullSections', []))
    print(f"{i}. {sch['id']} ({sch['programTitle']}) -> {num_sections} sections")
    assert num_sections == 7, f"Error: {sch['id']} does not have 7 sections!"

ts_code = "import { GovernmentTrackItem } from './scholarshipTracksData';\n\n"
ts_code += "export const ASIAN_GOVERNMENT_SCHOLARSHIPS: GovernmentTrackItem[] = "
ts_code += json.dumps(all_asian, indent=2, ensure_ascii=False)
ts_code += ";\n"

with open('src/data/asianGovernmentScholarshipsData.ts', 'w', encoding='utf-8') as f:
    f.write(ts_code)

print("SUCCESS: Written src/data/asianGovernmentScholarshipsData.ts")
