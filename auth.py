import tweepy
from tweepy import OAuthHandler

MONGODB_URI = 'mongodb://nwolfe:n66698701@ds237748.mlab.com:37748/nichola-test-mongo'

CONSUMER_KEY ='DCDWKI49excC2ae3RZTL1YOHF'
CONSUMER_SECRET = 'H8a6bvjBNothY2iVtg7lOS6ZyxP3JFYdzYV8guiSKAE3hYD9q2'
OAUTH_TOKEN = '304895217-OaqFtrJUPgu1nRIdIThtV43uAG1fHM20QrmABimy'
OAUTH_TOKEN_SECRET = 'xZipSpQFhcjXRgKDhHQOCB7M6DE25OMpep5VLY9qI58aZ'

auth = OAuthHandler(CONSUMER_KEY, CONSUMER_SECRET)
auth.set_access_token(OAUTH_TOKEN, OAUTH_TOKEN_SECRET)
api = tweepy.API(auth)

def get_auth():
    auth = OAuthHandler(CONSUMER_KEY, CONSUMER_SECRET)
    auth.set_access_token(OAUTH_TOKEN, OAUTH_TOKEN_SECRET)
    return auth