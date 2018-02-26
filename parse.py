import json
from textblob import TextBlob


interesting_tweets = []
with open("metoo.json", 'r') as f:
    for line in f:
        d = json.loads(line)

        if d['lang'] == 'en':
            analysis = TextBlob(d['text'])
            text = TextBlob(d['text']).replace(",", " ")
            polarity = analysis.sentiment.polarity
            subjectivity = analysis.sentiment.subjectivity
            created_at = str(d['created_at'])
            score = if analysis.sentiment.polarity > 0:
                        append.d(['positive'])


      
        if analysis.sentiment.polarity > 0:
            return 'positive'
        elif analysis.sentiment.polarity == 0:
            return 'neutral'
        else:
            return 'negative'
            
            # created_at = (d['created_at']).replace.format("%d/%m/%Y").parse
            
            
            interesting_tweets.append("{0},{1},{2},{3})\n".format(text, polarity, subjectivity, created_at))
        


with open("data/interesting.csv", 'w') as o:
        o.write("text,polarity,subjectivity,created_at\n")
        
        for tweet in interesting_tweets:
            o.write(tweet)