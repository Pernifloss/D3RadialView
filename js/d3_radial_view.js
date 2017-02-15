function RadialView(data) {
    this.data = data;
}

RadialView.prototype.dividerColor = "#ffffff";
RadialView.prototype.categoryTextColor = "#ffffff";
RadialView.prototype.dividerSize = 1;
var colors;

RadialView.prototype.radialMe = function (svg) {


    colors = d3.scaleLinear()
        .domain([0, this.getCategoryCount(this.data)])
        .range(["red", "black"]);

    var outerRadius = this.width / 2;
    var innerRadius = outerRadius - this.donutWidth;
    var arc = d3.arc()
        .innerRadius(innerRadius)
        .outerRadius(outerRadius)


    var radialview = svg
        .append("g");

    var iterator = 0;

    var sectionSize = this.calculateArcCirclePortionSize(this.getCategoryCount(this.data));
    var rank = 0;
    var self = this;
    console.log()
    console.log(self.data)
    var toDeg = ((360) / R);
    var tot = radialview.append('g')
        .attr("class", "radialView");

    tot
        .selectAll("path")
        .data(self.getCategories(self.data))
        .enter()
        .append("path")
        .style("fill", "#ff0000")
        .datum(
            function (d) {
                return {endAngle: ((rank + 1) * sectionSize), startAngle: ((rank++) * sectionSize)}
            })
        .attr("d", arc);
    rank = 0;
    var dividerPosition = 0;
    tot.selectAll("line")
        .data(self.getCategories(self.data))
        .enter()
        .append('line')
        .attr("x1", 0)
        .attr("x2", 0)
        .attr("y1", -outerRadius)
        .attr("y2", -innerRadius)
        .attr("stroke", this.dividerColor)
        .attr("stroke-width", this.dividerSize)
        .attr("transform", function (d) {
            dividerPosition =+(((rank++) * sectionSize) * toDeg);
            return "rotate("+ dividerPosition + ")"
        } )
    return radialview;

};
var R = 2 * Math.PI;

RadialView.prototype.data = [];

RadialView.prototype.setData = function (data) {
    this.data = data;
},

RadialView.prototype.calculateArcCirclePortionSize = function (sectionNumber) {
    return R / sectionNumber;
};

RadialView.prototype.width = 300;

RadialView.prototype.padding = R / 365;

RadialView.prototype.donutWidth = 100;

RadialView.prototype.getCategories = function (d) {
    return this.data;
};
RadialView.prototype.getCategoryCount = function (d) {
    return this.getCategories(d).length;
};
RadialView.prototype.categories = function (d) {
    this.getCategories = d;
    return this;

};


RadialView.prototype.setWidth = function (d) {
    this.width = d;
    return this;

};
RadialView.prototype.setDonutWidth = function (d) {
    this.donutWidth = d
    return this;

};
radialView = function (data) {
    return new RadialView(data)
}