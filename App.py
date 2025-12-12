حfrom datetime import datetime

documents = [
    {
        "type": "National ID",
        "expiry_date": "2025-02-10"
    },
    {
        "type": "Passport",
        "expiry_date": "2025-05-01"
    },
    {
        "type": "Vehicle Registration",
        "expiry_date": "2025-01-20"
    }
]

def check_expiry(documents):
    today = datetime.today()

    alerts = []
