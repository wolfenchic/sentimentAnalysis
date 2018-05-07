queue()
  .defer(d3.csv, "data/interestingRepeal.csv")
  .await(makeGraphs);
  
  
  function makeGraphs(error, tweetData) {
      
      let ndx = crossfilter(tweetData);
      
      tweetData.forEach(function (d) {
          d.polarity = parseInt(d.polarity);
          d.subjectivity = parseInt(d.subjectivity); 
          d.created_at = parseInt(d.created_at);
      });
    
      average_scores(ndx, "#average_hdi_score");
      
       dc.renderAll();
    }
    
    function average_scores(ndx, element) {
  
    let all_records = ndx.groupAll();
    
    let average_polarity = all_records.reduce(
        function (p, v) {
            p.count++;
            p.total += v.polarity;
            p.average = p.total / p.count;
            return p;
        },
        function (p, v) {
            p.count--;
            if(p.count > 0){
                p.total -= v.polarity;
                p.average = p.total / p.count; 
            }else{
                p.total = 0;
                p.average = 0
            }
            return p;
        },
        function (){
            return {count:0, total:0, average:0}
        });
        
    
    dc.numberDisplay(element)
        .formatNumber(d3.format(".1f"))
        .valueAccessor(function (d) {
            return d.average;
            print(d.average)
        })
        .group(average_scores);
        
}

    
    
  
  