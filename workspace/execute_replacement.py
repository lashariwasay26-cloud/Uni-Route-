import json, re

from generate_and_update import u_spain_1, u_spain_2, u_spain_3, u_spain_4, u_spain_5, u_austria_1, u_austria_2, u_austria_3
from append_unis_part2 import u_portugal_1, u_portugal_2, u_portugal_3
from append_unis_part3 import u_poland_1, u_hungary_1, u_hungary_2
from append_unis_part4 import u_saudi_1, u_saudi_2, u_saudi_3, u_saudi_4, u_saudi_5, u_turkey_1, u_turkey_2, u_turkey_3, u_turkey_4

all_unis = [
  u_spain_1, u_spain_2, u_spain_3, u_spain_4, u_spain_5,
  u_austria_1, u_austria_2, u_austria_3,
  u_portugal_1, u_portugal_2, u_portugal_3,
  u_poland_1,
  u_hungary_1, u_hungary_2,
  u_saudi_1, u_saudi_2, u_saudi_3, u_saudi_4, u_saudi_5,
  u_turkey_1, u_turkey_2, u_turkey_3, u_turkey_4
]

print(f"Total universities to inject: {len(all_unis)}")

with open('src/data/asianUniversitiesData.ts', 'r') as f:
    text = f.read()

start_idx = text.find('"id": "uni-spain-001"')
if start_idx == -1:
    start_idx = text.find("'id': 'uni-spain-001'")

brace_start = text.rfind('{', 0, start_idx)

turkey_idx = text.find('"id": "uni-turkey-004"')
if turkey_idx == -1:
    turkey_idx = text.find("'id': 'uni-turkey-004'")

turkey_start = text.rfind('{', 0, turkey_idx)

depth = 0
turkey_end = -1
for i in range(turkey_start, len(text)):
    if text[i] == '{':
        depth += 1
    elif text[i] == '}':
        depth -= 1
        if depth == 0:
            turkey_end = i + 1
            break

print(f"Replacement range: {brace_start} to {turkey_end}")

# Format all_unis as TypeScript JS code
formatted_elements = []
for u in all_unis:
    formatted_elements.append(json.dumps(u, indent=2))

ts_code = ",\n".join(formatted_elements)

new_text = text[:brace_start] + ts_code + text[turkey_end:]

with open('src/data/asianUniversitiesData.ts', 'w') as f:
    f.write(new_text)

print("Successfully updated src/data/asianUniversitiesData.ts!")
