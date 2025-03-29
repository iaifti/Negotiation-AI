client = MongoClient('mongodb://localhost:27017/')  #Update later
db = client['negotiation_ai']
users_collection = db['users']