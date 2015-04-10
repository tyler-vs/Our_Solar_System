//Jupiter Composition D3
		var config = liquidFillGaugeDefaultSettings();
		config.circleColor = "#DD8747";
		config.textColor = "#fff";
		config.waveTextColor = "#fff";
		config.waveColor = "#DD8747";
		config.circleThickness = 0.2;
		config.textVertPosition = 0.5;
		config.waveAnimateTime = 1000;
		loadLiquidFillGauge("jupiterHelium", 25, config);
		var config1 = liquidFillGaugeDefaultSettings();
		config1.circleColor = "#9D6033";
		config1.textColor = "#fff";
		config1.waveTextColor = "#fff";
		config1.waveColor = "#9D6033";
		config1.circleThickness = 0.2;
		config1.textVertPosition = 0.3;
		config1.waveAnimateTime = 1000;
		loadLiquidFillGauge("jupiterHydrogen", 73, config1);
		var config2 = liquidFillGaugeDefaultSettings();
		config2.circleColor = "#EA8F4B";
		config2.textColor = "#fff";
		config2.waveTextColor = "#805615";
		config2.waveColor = "#EA8F4B";
		config2.circleThickness = 0.2;
		/* config2.circleFillGap = 0.2; */
		config2.textVertPosition = 0.5;
		config2.waveAnimateTime = 2000;
		config2.waveHeight = 0.3;
		config2.waveCount = 1;
		loadLiquidFillGauge("jupiterOther", 2, config2);
		
