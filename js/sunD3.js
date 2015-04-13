//Sun Composition D3
		var config = liquidFillGaugeDefaultSettings();
		config.circleColor = "#fdb813";
		config.textColor = "#fff";
		config.waveTextColor = "#fff";
		config.waveColor = "#fdb813";
		config.circleThickness = 0.2;
		config.textVertPosition = 0.3;
		config.waveAnimateTime = 1000;
		loadLiquidFillGauge("sunHydrogen", 73, config);
		var config1 = liquidFillGaugeDefaultSettings();
		config1.circleColor = "#FDC02C";
		config1.textColor = "#fff";
		config1.waveTextColor = "#fff";
		config1.waveColor = "#FDC02C";
		config1.circleThickness = 0.2;
		config1.textVertPosition = 0.5;
		config1.waveAnimateTime = 1000;
		loadLiquidFillGauge("sunHelium", 25, config1);
		var config2 = liquidFillGaugeDefaultSettings();
		config2.circleColor = "#FDC02C";
		config2.textColor = "#fff";
		config2.waveTextColor = "#fff";
		config2.waveColor = "#FDC02C";
		config2.circleThickness = 0.2;
		/* config2.circleFillGap = 0.2; */
		config2.textVertPosition = 0.5;
		config2.waveAnimateTime = 2000;
		config2.waveHeight = 0.3;
		config2.waveCount = 1;
		loadLiquidFillGauge("sunOther", 2, config2);
		
