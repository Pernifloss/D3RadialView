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

    radialview.append("path")
        .datum({endAngle: R, startAngle: 0})
        .style("fill", "#ddd")
        .attr("d", arc);

    var iterator = 0;

    var sectionSize = this.calculateArcCirclePortionSize(this.getCategoryCount(this.data));


    for (var i = 0; i < this.getCategoryCount(this.data); i++) {
        iterator += ((i + 1) * sectionSize);

        var endAngle = ((i + 1) * sectionSize);

        var startAngle = (i * sectionSize);

        var myPath = radialview.append("path")
            .datum({endAngle: endAngle, startAngle: startAngle})
            .style("fill", this.getCategoryColor(i))
            .attr("class", this.getCategoryLabel(this.getCategoryAtPosition(this.data, i)))
            .attr("id", "path" + i)
            .attr("d", arc);

        var toDeg = ((360) / R);

        var numberPosition = ((-90))
            + (startAngle * toDeg)
            + (((sectionSize * toDeg)) / 2);

        var dividerPosition = +(startAngle * toDeg);
        radialview.append('line')
            .attr("x1", 0)
            .attr("x2", 0)
            .attr("y1", -outerRadius)
            .attr("y2", -innerRadius)
            .attr("stroke", this.dividerColor)
            .attr("stroke-width", this.dividerSize)

            .attr("transform", "rotate(" + dividerPosition + ")").raise()

        radialview.append('text')
            .text(this.getCategoryChildrenCount(this.getCategoryAtPosition(this.data, i)) + " " + (this.getCategoryLabel(this.getCategoryAtPosition(this.data, i))))
            .attr("x", innerRadius + 10)
            .attr("y", 0)
            .attr("id", "txt" + i)
            .attr("transform", "rotate(" + numberPosition + ")")
            .style("text-anchor", "center")
            .attr("fill", this.categoryTextColor)
    }
    radialview.selectAll('line').raise();
    return radialview;
};

var R = 2 * Math.PI;

RadialView.prototype.data = [];

function setData(data) {
    this.data = data;
}

RadialView.prototype.calculateArcCirclePortionSize = function (sectionNumber) {
    return R / sectionNumber;
};

RadialView.prototype.width = 300;
RadialView.prototype.padding = R / 365;

RadialView.prototype.donutWidth = 100;

RadialView.prototype.getCategories = function (d) {
    return [
        {label: "category 1", children: ['child1', 'child2']},
        {label: "category 2", children: ['child 1']}
    ]
};
RadialView.prototype.getCategoryCount = function (d) {
    return this.getCategories(d).length;
};
RadialView.prototype.getCategoryColor = function (i) {
    return colors(i);
};
RadialView.prototype.getCategoryLabel = function (c) {
    return c + "";
};

RadialView.prototype.getCategoryAtPosition = function (d, i) {
    return this.getCategories(d)[i];
};
RadialView.prototype.getCategoryChildren = function (d) {
    return d;
};
RadialView.prototype.getCategoryChildrenCount = function (d) {
    return this.getCategoryChildren(d).length;
};

RadialView.prototype.categoryCount = function (d) {
    this.getCategoryCount = d;
    return this;

};

RadialView.prototype.categoryLabel = function (d) {
    this.getCategoryLabel = d;
    return this;

};

RadialView.prototype.categoryAtPosition = function (d) {
    this.getCategoryAtPosition = d;
    return this;

};
RadialView.prototype.categoryChildren = function (d) {
    this.getCategoryChildren = d;
    return this;

};
RadialView.prototype.categoryColor = function (d) {
    this.getCategoryColor = d;
    return this;

};
RadialView.prototype.categories = function (d) {
    this.getCategories = d;
    return this;

};
radialView = function(data){
    return  new RadialView(data)
}

RadialView.prototype.setWidth  = function (d) {
    this.width  = d;
    return this;

};
RadialView.prototype.setDonutWidth  = function (d) {
    this.donutWidth  = d
    return this;

};
RadialView.prototype.setCategoryTextColor  = function (d) {
    this.categoryTextColor  = d
    return this;

};
RadialView.prototype.setDividerColor  = function (d) {
    this.dividerColor  = d
    return this;

};
RadialView.prototype.setDividerSize  = function (d) {
    this.dividerSize  = d
    return this;

};