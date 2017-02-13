function radialMe(svg){

    svg.append('g')
        .append('text')
        .text("Coucou je suis du text svg de ma lib !")
        .attr("x", 20)
        .attr("y", 40)
        .style("text-anchor", "start")
        .attr("stroke", "#465754")
}
