TestCase("AngleUtils", {
    "test angle": function() {
        var angleUtils = new pernifloss.AngleUtils();
        assertEquals(0.5 * Math.PI , angleUtils.getItersectionAngle(0,0,10,0));
        assertEquals( 0.75* Math.PI ,angleUtils.getItersectionAngle(0,0,10,10));
    }

});
