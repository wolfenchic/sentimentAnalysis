import json
from textblob import TextBlob


interesting_tweets = []
with open("repealNo.json", 'r') as f:
    for line in f:
        d = json.loads(line)

        if d['lang'] == 'en':
            analysis = TextBlob(d['text'])
            text = TextBlob(d['text']).replace(",", " ")
            polarity = analysis.sentiment.polarity
            subjectivity = analysis.sentiment.subjectivity
            created_at = str(d['created_at'])
           
            interesting_tweets.append("{0},{1},{2},{3})\n".format(text, polarity, subjectivity, created_at))
        


with open("data/noRepeal.csv", 'w') as o:
        o.write("text,polarity,subjectivity,created_at\n")
        
        for tweet in interesting_tweets:
            o.write(tweet)