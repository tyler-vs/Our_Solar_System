// Mars Compostion D3

var config = liquidFillGaugeDefaultSettings();
		config.circleColor = "#972904";
		config.textColor = "#fff";
		config.waveTextColor = "#fff";
		config.waveColor = "#972904";
		config.circleThickness = 0.2;
		config.textVertPosition = 0.5;
		config.waveAnimateTime = 1000;
		loadLiquidFillGauge("marsCarbonDioxide", 95, config);
		var config1 = liquidFillGaugeDefaultSettings();
		config1.circleColor = "#972904";
		config1.textColor = "#fff";
		config1.waveTextColor = "#fff";
		config1.waveColor = "#972904";
		config1.circleThickness = 0.2;
		config1.textVertPosition = 0.5;
		config1.waveAnimateTime = 1000;
		loadLiquidFillGauge("marsNitrogen", 3, config1);
		var config2 = liquidFillGaugeDefaultSettings();
		config2.circleColor = "#972904";
		config2.textColor = "#fff";
		config2.waveTextColor = "#fff";
		config2.waveColor = "#972904";
		config2.circleThickness = 0.2;
		/* config2.circleFillGap = 0.2; */
		config2.textVertPosition = 0.5;
		config2.waveAnimateTime = 2000;
		config2.waveHeight = 0.3;
		config2.waveCount = 1;
		loadLiquidFillGauge("marsOther", 2, config2);