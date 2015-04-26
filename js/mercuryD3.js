// Mercury Compostion D3

var config = liquidFillGaugeDefaultSettings();
		config.circleColor = "#fdae6b";
		config.textColor = "#fff";
		config.waveTextColor = "#fff";
		config.waveColor = "#fdae6b";
		config.circleThickness = 0.2;
		config.textVertPosition = 0.7;
		config.waveAnimateTime = 1000;
		loadLiquidFillGauge("mercuryOxygen", 42, config);
		var config1 = liquidFillGaugeDefaultSettings();
		config1.circleColor = "#fdae6b";
		config1.textColor = "#fff";
		config1.waveTextColor = "#fff";
		config1.waveColor = "#fdae6b";
		config1.circleThickness = 0.2;
		config1.textVertPosition = 0.5;
		config1.waveAnimateTime = 1000;
		loadLiquidFillGauge("mercurySodium", 29, config1);
		var config2 = liquidFillGaugeDefaultSettings();
		config2.circleColor = "#fdae6b";
		config2.textColor = "#fff";
		config2.waveTextColor = "#fff";
		config2.waveColor = "#fdae6b";
		config2.circleThickness = 0.2;
		/* config2.circleFillGap = 0.2; */
		config2.textVertPosition = 0.5;
		config2.waveAnimateTime = 2000;
		config2.waveHeight = 0.3;
		config2.waveCount = 1;
		loadLiquidFillGauge("mercuryOther", 29, config2);