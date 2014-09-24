// Пример исползования таблицы
DataTable.example = function() {
	// Добавить область для таблицы
	$('body').html('<div class="my-table"></div>');
	
	// Установка размеров окна
	function onResize() { $('.my-table').height($(window).height() - 2);}
	$(window).resize(onResize);
	onResize();
	
	// Типы данных для таблицы
	var DataType = {
		STRING:  0,
		INTEGER: 1,
		FLOAT:   2,
		ENUM:    4,
		BOOLEAN: 5
	};
	
	// Данные для таблицы
	var tableData = [
		[{
			type   : DataType.STRING,					
			value  : "1Sample integer",
			editable : false
		}, {
			type     : DataType.INTEGER,					
			value    : 0,
			minValue : -100,
			maxValue : 100,
			editable : true
		}],
		
	    [{
			type     : DataType.STRING,					
			value    : "2Sample string",
			editable : false
		}, {
			type     : DataType.STRING,					
			value    : "Value#1",
			editable : true
		}],
		
		[{
			type     : DataType.STRING,					
			value    : "4Sample float",
			editable : false
		}, {
			type      : DataType.FLOAT,					
			value     : 10.1,
			minValue  : -100.0,
			maxValue  : 100.0,
			measure   : 'm',
			decPlaces : 1,
			editable  : true
		}],
		
		[{
			type   : DataType.STRING,					
			value  : "3Sample float (transform)",
			editable : false
		}, {
			type      : DataType.FLOAT,					
			value     : 10.1,
			minValue  : -100.0,
			maxValue  : 100.0,
			ratio     : 0.001,
			measure   : ['A', 'mA'],
			decPlaces : [1, 4],
			editable  : true
		}],
		
		[{
			type     : DataType.STRING,					
			value    : "6Sample enum",
			editable : false
		}, {
			type      : DataType.ENUM,					
			value     : 0,
			items     : ['-', 'Value#1', 'Value#2'],
			editable    : true
		}],
		
		[{
			type     : DataType.STRING,					
			value    : "5Sample boolean",
			editable : false
		}, {
			type      : DataType.BOOLEAN,					
			value     : true,
			trueText  : 'Enable',
			falseText : 'Disable',
			editable  : true
		}]
	];
	
	
	
	// Обработчики событий
	function onFieldClick(event) {
		var value, data = this.data[event.rowIndex][event.colIndex];
		if (data.newvalue !== undefined) 
			value = data.newvalue;
		else
			value = data.value;
		
		if (data.editable) {
			// Определить поле ввода для ячейки по типу данных
			var input;
			switch (data.type) {
				case DataType.INTEGER:
					input = {
						type: DataTable.InputType.INTEGER,
						value: value
					};
					break;
					
				case DataType.FLOAT:
					input = {
						type: DataTable.InputType.FLOAT,
						value: value,
						decPlaces: (data.ratio === undefined ? data.decPlaces : data.decPlaces[0])
					};
					break;
					
				case DataType.ENUM:
					input = {
						type: DataTable.InputType.ENUM,
						value: value,
						items: data.items
					};
					break;
					
				case DataType.BOOLEAN:
					input = {
						type: DataTable.InputType.BOOLEAN,
						value: value,
						falseText: data.falseText,
						trueText: data.trueText
					};
					break;
					
				default:
					input = {
						type: DataTable.InputType.STRING,
						value: value
					};
			}
			
			// Отобразить поля ввода в ячейке
			this.rows.edit(event.rowIndex, event.colIndex, input);
		}
	}
	
	function onFieldAccept(event) {
		if (event.value !== undefined) {
			if (event.value !== event.data.value) {
				event.data.newvalue = event.value;
			} else {
				event.data.newvalue = undefined;
			}
		}
		/*
		// Проверить диапазон 
		if (value > filde.max_value) 
			value = filde.max_value;
		else if (value < filde.min_value) 
			value = filde.min_value;
		 */
	}
	
	function onPageChange(event) {
		setTimeout(function() {
			event.callback([
			    [{
        			type     : DataType.STRING,					
        			value    : "Sample string",
        			editable : false
        		}, {
        			type     : DataType.STRING,					
        			value    : "Value#1",
        			editable : true
        		}]
			]);
		}, 1500);
	}
	
	function onFieldShow(event) {
		var showValue;
		switch (event.data.type) {
			case DataType.INTEGER:
				showValue = function(data, value) {
					return value.toString();
				};
				break;
				
			case DataType.FLOAT:
				showValue = function(data, value) {
					if (data.ratio !== undefined) {
						return value.toFixed(data.decPlaces[0]).replace('.', ',') + ' ' + data.measure[0] + ' / ' +
							(value * data.ratio).toFixed(data.decPlaces[1]).replace('.', ',') + ' ' + data.measure[1];
					}
					return value.toFixed(data.decPlaces).replace('.', ',') + ' ' + data.measure;
				};
				break;
				
			case DataType.ENUM:
				showValue = function(data, value) {
					return data.items[value];
				};
				break;
				
			case DataType.BOOLEAN:
				showValue = function(data, value) {
					return (value ? data.trueText : data.falseText);
				};
				break;
				
			default:
				showValue = function(data, value) {
					return value;
				};
		}
		if (event.data.newvalue !== undefined) {
			return '<span class="new-value">' + showValue(event.data, event.data.newvalue) + '</span> | ' +
				'<span class="old-value">' + showValue(event.data, event.data.value) + '</span>';
		}
		return '<span>' + showValue(event.data, event.data.value) + '</span>';
	}
	
	function onButtonClick(event) {
		var dt = this;
		switch (event.name) {
			case 'name_1':
				dt.controls.enabled(event.name, false);
				setTimeout(function() {
					dt.controls.enabled(event.name, true);
				}, 3000);
				break;
				
			case 'name_3':
				dt.caption.set('New ' + dt.caption.get());
				break;
		}
	}

	
	function onSelectChange(event) {
		var dt = this;
		dt.controls.enabled(event.name, false);
		setTimeout(function() {
			dt.controls.enabled(event.name, true);
		}, 3000);
	}
	
	
	
	// Создание таблицы данных
	var dt = new DataTable($('.my-table'), {
		name:     'table1',
		caption:  'Заголовок',
		empty:    '',
		language: DataTable.Language.ENGLISH,
		filter:   true,
		
		controls: [{
			// Тип элемента панели "Кнопка"
			type: DataTable.ControlType.BUTTON,
			// Уникальное название контрола
			name: 'name_1',
			// Текст на кнопке
			caption: 'Обновить',
			// Всплывающая подсказка
			hint: 'Текст подсказки',
			// Признак активности элемента
			enabled: true
		}, {
			// Тип элемента панели "Кнопка"
			type: DataTable.ControlType.SELECT,
			// Уникальное название контрола
			name: 'name_2',
			// Текст на кнопке
			caption: 'Обновить',
			// Всплывающая подсказка
			hint: 'Текст подсказки',
			// Элементы списка
			items: ['Value#1', 'Value#2', 'Value#3'],
			// Значение 
			value: 0
		}, {
			// Тип элемента панели "Кнопка"
			type: DataTable.ControlType.BUTTON,
			// Уникальное название контрола
			name: 'name_3',
			// Текст на кнопке
			caption: 'Сменить заголовок',
			// Всплывающая подсказка
			hint: 'Текст подсказки',
			// Признак активности элемента
			enabled: true
		}],
		
		columns: [{
			caption: 'Name',
			width:    300,
			align:    'left',
			sortable: true
		}, {
			caption: 'Value',
			width:    400,
			align:    'center',
			sortable: false
		}],
		
		pagination: {
			page:  5,
			count: 10
		}
	}, function(event) {
		switch (event.type) {
			case DataTable.Events.FIELD_CLICK:
				return onFieldClick.call(this, event);
				
			case DataTable.Events.FIELD_ACCEPT:
				return onFieldAccept.call(this, event);
				
			case DataTable.Events.FIELD_SHOW:
				return onFieldShow.call(this, event);
				
			case DataTable.Events.PAGE_CHANGE:
				return onPageChange.call(this, event);
				
			case DataTable.Events.ROW_CLICK:
				return null;
				
			case DataTable.Events.BUTTON_CLICK:
				return onButtonClick.call(this, event);
				
			case DataTable.Events.SELECT_CHANGE:
				return onSelectChange.call(this, event);
		}
	});
	
	// Добавить данные в таблицу
	dt.rows.add(tableData);
};