pernifloss = {};

pernifloss.AngleUtils = function() { };

pernifloss.AngleUtils.prototype.getItersectionAngle = function(xa,ya,xb,yb) {
    // return angle in radian beetwen vertical line and (xa,ya),(xb,yb)
    //           B        A(xA;yA), B(xB;yB), C(xB;yA)
    //        /|        AB = sqrt((xB-xA)²+(yB-yA)²)
    //       / |        AC = sqrt((xB-xA)²+(yA-yA)²) = xB-xA
    //      /  |        CB = sqrt((xB-xB)²+(yB-yA)²) = yB-yA
    //   A _____C    cos abc=CB/AB
    //                abc = arcos(CB/BA)=arcos((yB-yA)/sqrt((xB-xA)²+(yB-yA)²))
    //
    var angleRadian = Math.acos(((-yb)+ya)/Math.sqrt(Math.pow(xb-xa,2)+Math.pow((-yb)+ya,2)));
    return angleRadian;
}