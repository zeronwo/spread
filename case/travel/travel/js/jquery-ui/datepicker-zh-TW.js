/* Chinese initialisation for the jQuery UI date picker plugin. */
/* Written by Ressol (ressol@gmail.com). */
( function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define( [ "../widgets/datepicker" ], factory );
	} else {

		// Browser globals
		factory( jQuery.datepicker );
	}
}( function( datepicker ) {

datepicker.regional[ "zh-TW" ] = {
	closeText: "关闭",
	prevText: "&#x3C;上个月",
	nextText: "下个月&#x3E;",
	currentText: "今天",
	monthNames: [ "/1","/2","/3","/4","/5","/6",
	"/7","/8","/9","/10","/11","/12" ],
	monthNamesShort: [ "/1","/2","/3","/4","/5","/6",
	"/7","/8","/9","/10","/11","/12"  ],
	dayNames: [ "星期日","星期一","星期二","星期三","星期四","星期五","星期六" ],
	dayNamesShort: [ "周日","周一","周二","周三","周四","周五","周六" ],
	dayNamesMin: [ "日","一","二","三","四","五","六" ],
	weekHeader: "周",
	dateFormat: "yy/mm/dd",
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: true,
	yearSuffix: "" };
datepicker.setDefaults( datepicker.regional[ "zh-TW" ] );

return datepicker.regional[ "zh-TW" ];

} ) );
