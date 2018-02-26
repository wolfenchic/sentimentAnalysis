queue()
  .defer(d3.csv, "data/interesting.csv")
  .await(makeGraphs);
  
  
  function makeGraphs(error, tweetData) {
      
      let ndx = crossfilter(tweetData);
      
      tweetData.forEach(function (d) {
          d.polarity = parseInt(d.polarity);
          d.subjectivity = parseInt(d.subjectivity); 
          d.created_at = parseInt(d.created_at);
      })
      
      show_all_sentiment(ndx)
  }  
    

function show_all_sentiment(ndx) {
    var  sentimentColors = d3.scale.ordinal()
    .domain(["Polarity", "Subjectvity"])
    .range(["green", "red"]);
    
    
    let eDim = ndx.dimension(dc.pluck("created_at"));
    let sentimentDim = ndx.dimension(function(d){
        return [d.polarity, d.subjectivity, d.created_at];
    });
    
    let postedDate = sentimentDim.group();
    
    let minSentiment = eDim.bottom(-)[0].yrs_service;
    let maxExperience = eDim.top(1)[0].yrs_service;
    
   dc.scatterPlot("#Salary-to-years-of-service")
        .width(800)
        .height(400)
        .x(d3.scale.linear().domain([minExperience,maxExperience]))
        .brushOn(true)
        .symbolSize(8)
        .clipPadding(10)
        .yAxisLabel("Salary")
        .xAxisLabel("yrs_service")
        .title(function (d) {
            return d.key[2] + " earned " + d.key[1];
        })
        .colorAccessor(function (d) {
            return d.key[3];
        })
        .colors(genderColors)
        .dimension(experienceDim)
        .group(experienceSalaryGroup)
        .margins({top: 10, right: 50, bottom: 75, left: 75});
        
}