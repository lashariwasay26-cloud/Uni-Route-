import json

def get_pillar_1(name, provider, country, levels, routes, pk_elig, duration, cycle):
    return {
        "number": 1,
        "title": "Quick Snapshot & Overview",
        "content": f"Programme name: {name}\nAwarding authority: {provider}\nHost country: {country}\nDegree levels: {levels}\nMain application routes: {routes}\nPakistan eligibility: {pk_elig}\nDuration: {duration}\nVerified cycle: {cycle}"
    }

def get_pillar_2(status, tuition, stipend, travel, accom, health, other=""):
    c = f"Funding status: {status}\n1. Tuition: {tuition}\n2. Living stipend: {stipend}\n3. International travel: {travel}\n4. Accommodation: {accom}\n5. Health insurance: {health}"
    if other:
        c += f"\n6. Additional benefits: {other}"
    return {
        "number": 2,
        "title": "Financial Coverage & Benefits",
        "content": c
    }

def get_pillar_3(eligibility_list):
    return {
        "number": 3,
        "title": "Core Eligibility & Deal-Breakers",
        "content": "\n".join([f"* {item}" for item in eligibility_list])
    }

def get_pillar_4(tests_list):
    return {
        "number": 4,
        "title": "Language & Entrance Tests",
        "content": "\n".join(tests_list)
    }

def get_pillar_5(steps_list):
    return {
        "number": 5,
        "title": "Application Route & Step-by-Step Flow",
        "content": "\n".join(steps_list)
    }

def get_pillar_6(docs_list):
    return {
        "number": 6,
        "title": "Required Documents Checklist",
        "content": "\n".join([f"{i+1}. {doc}" for i, doc in enumerate(docs_list)])
    }

def get_pillar_7(cycle, dates_list, portal_urls):
    c = f"Current cycle: {cycle}\n" + "\n".join(dates_list) + "\n" + "\n".join([f"Official portal: {u}" for u in portal_urls])
    return {
        "number": 7,
        "title": "Timeline, Deadlines & Official Portal",
        "content": c
    }
