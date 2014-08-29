/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * 
 *                            Таблица данных
 *                            
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * 
 * Параметры:
 *  - options - параметры отображения таблицы
 *  - content - контент, в котором будет отображаться таблица
 *  - callback - функция обработки событий от таблицы данных
 *  
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *   
 * Структура параметра options
 *   (Знаком [!] отмечены обязательные поля):
 * 
 * options: {
 *     // Уникальный идентификатор таблицы
 *  [!]name: 'Имя',
 *     // Заголовок таблицы данных
 *     caption: 'Заголовок',
 *     // Информационная строка об остутствии данных
 *     empty: 'Данных нет',
 *     // Используемая локализация
 *     language: DataTable.Language.XXX,
 *     // Признак фильтра поиска по таблице
 *     filter: true|false,
 *     
 *     // Командная панель таблицы
 *     controls: [{
 *         // Тип элемента панели "Кнопка"
 *      [!]type: DataTable.ControlType.BUTTON,
 *         // Уникальное название контрола
 *      [!]name: 'name#1',
 *         // Признак активности элемента
 *         enabled: true|false,
 *         // Текст на кнопке
 *         caption: 'Обновить',
 *         // Всплывающая подсказка
 *         hint: 'Текст подсказки'
 *     }, {
 *         // Тип элемента панели "Выпадающий список"
 *      [!]type: DataTable.ControlType.SELECT,
 *         // Уникальное название контрола
 *      [!]name: 'name#1',
 *         // Индекс выбранного элемента списка
 *         value: 0,
 *         // Элементы списка
 *         items: [],
 *         // Признак активности элемента
 *         enabled: true,
 *         // Текст на кнопке
 *         caption: 'Обновить',
 *         // Всплывающая подсказка
 *         hint: 'Текст подсказки'
 *     }],
 *     
 *     // Названия столбцов
 *  [!]columns: {
 *         data: [{
 *             // Название столбца
 *             caption: '',
 *             // Ширина столбца в пикселях или в относительных 
 *             // единицах (< 1 и > 0)
 *     	       width: xx,
 *             // Выравнивание элементов в столбце
 *             align: "left"|"right"|"center" (по умолчанию left),
 *             // Возможность сортировки по этому столбцу
 *             sortable: false | true
 *         },...]
 *     },
 *     
 *     // Навигационная панель
 *     pagination: {
 *         // Текущая страница
 *         page: 1,
 *         // Общее количество страниц
 *         count: 10
 *     }
 *   }
 *   
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *   Структура параметра data
 *       data: [
 *         {
 *           // просто текст
 *           type: GLOBAL.VAR_TYPE.STRING,
 *           // содержимое ячейки
 *           value: '',
 *           // новое значение
 *           // до изменения == null
 *           newvalue: '',
 *           // картинка слева от текста
 *       	 img: '',
 *       	 // доступность текста для изменения
 *           // (по умолчанию false)
 *           // при нажатии на строку предоставляется возможность 
 *           // для изменения этого поля
 *       	 change: ture|false
 *         }, {
 *           // целое число
 *           type: GLOBAL.VAR_TYPE.INTEGER,
 *           // максимальное значение
 *           max_value: '',
 *           // минимальное значение
 *           min_value: '',
 *       	 // доступность текста для изменения
 *           // (по умолчанию false)
 *           // при нажатии на строку предоставляется возможность 
 *           // для изменения этого поля
 *       	 change: ture|false
 *         }, {
 *           // просто число
 *           type: GLOBAL.VAR_TYPE.FLOAT,
 *           // Метод трансформации
 *           method: GLOBAL.TRANSFORM.XXX,
 *           // максимальное значение
 *           max_value: '',
 *           // минимальное значение
 *           min_value: '',
 *       	 // доступность текста для изменения
 *           // (по умолчанию false)
 *           // при нажатии на строку предоставляется возможность 
 *           // для изменения этого поля
 *       	 change: ture|false
 *           // единица измерения (если нет трансформации)
 *           measure: "измерение",
 *           // единица измерения (если есть трансформация)
 *           measure: ["для первичного значения", "для вторичного значения"],
 *           // Коэфициент трансформации (если есть трансформация)
 *           ratio: 0.1,
 *           // число знаков после запятой (если нет трансформации)
 *           decPlaces: <число знаков после запятой>
 *         }, {
 *         	 // Числовой тип с двумя значениями (трансформированным и не трансформированным)
 *           type: GLOBAL.VAR_TYPE.COMPLEX,
 *           // Метод трансформации
 *           method: GLOBAL.TRANSFORM.XXX,
 *       	 // доступность текста для изменения
 *           // (по умолчанию false)
 *           // при нажатии на строку предоставляется возможность 
 *           // для изменения этого поля
 *       	 change: ture|false
 *           // единица измерения (если нет трансформации)
 *           measure: "измерение",
 *           // единица измерения (если есть трансформация)
 *           measure: ["для первичного значения", "для вторичного значения"],
 *           // Коэфициент трансформации (если есть трансформация)
 *           ratio: 0.1,
 *           // число знаков после запятой (если нет трансформации)
 *           decPlaces: <число знаков после запятой>,
 *           // число знаков после запятой в значении угла
 *           angleDecPlaces: <double>
 *         }, {
 *           // перечислденный тип
 *           type: GLOBAL.VAR_TYPE.ENUM,
 *           // возможные значения
 *           values: ['value1', 'value2', ... ],
 *           // индекс выбранного значения 
 *           value: xx,
 *           // новое значение
 *           // до изменения == null
 *           newvalue: xx,
 *       	 // доступность текста для изменения
 *           // (по умолчанию false)
 *           // при нажатии на строку предоставляется возможность 
 *           // для изменения этого поля
 *       	 change: ture|false
 *         }]
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */



// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
// Конструктор таблицы данных
function DataTable($content, options, callback) {
	// Проверить имя таблицы
	if (/\W+/i.test(options.name))
		throw 'TODO';
	// Проверить наличие элементов с таким именем как id
	if (document.getElementById(options.name))
		throw 'TODO';
	
	// Указатель на самого себя
	var self = this;
	
	// Сохранить ссылку на родительский контент
	this._$content = $content;
	// Сохранить параметры таблицы
	this._options = options;
	// Сохранить ссылку на функцию обработки прерываний
	this._callback = callback;
	
	// Данные таблицы
	this.data = [];
	
	// Отображать как контейнер таблицы
	$content.addClass('dt');
	// Установить id как имя таблицы
	$content.attr('id', options.name);
	
	// Добавить таблицу на страницу
	$content.html(DataTable.Builder.htmlTable(options));

	
	
	// Все что касается изменения размеров окна
	(function() {
		// Функция обработки изменений размеров окна
		var onResize = DataTable.debounce(function() {
			// Установить высоту области данных таблицы
			$content.find('.dt-body').height($content.height() -
				$content.find('.dt-caption'   ).outerHeight() - 
				$content.find('.dt-controls'  ).outerHeight() -
				$content.find('.dt-head'      ).outerHeight() - 
				$content.find('.dt-pagination').outerHeight() -
				$content.find('.dt-filter'    ).outerHeight());
			
			// Если скроллинг справа есть, то установить его ширину как оступ для dt-head-inner
			$content.find('.dt-head-inner').css('margin-right', $content[0].clientWidth - 
				$content.find('.dt-body')[0].clientWidth);
		}, 100);
		
		// Установить обработчик
		$(window).resize(onResize);
		// Установить начальные значения
		onResize();
	
		// Настройка обработки скроллинга
		$content.find('.dt-body').scroll(function() {
			$content.find('.dt-head-inner').scrollLeft(this.scrollLeft);
		});
	})();

	
	
	// Управление таблицей клавиатурой
	(function() {
		// Признак наличия фокуса у таблицы
		var focused = false;
		// Признак нажатия на тело таблицы
		var recentlyFocused = false;
		
		// Получение фокуса
		$(document).on('click', '.dt-body', function(e) {
			$(this).addClass('dt-body--focused');
			focused = true;
			recentlyFocused = true;
		});
		
		// Потеря фокуса
		$(document).on('click', function(e) {
			if (focused) {
				if (!recentlyFocused) {
					$content.find('.dt-body').removeClass('dt-body--focused');
					focused = false;
				} else {
					recentlyFocused = false;
				}
			}
		});
		
		// Переход вверх и вниз
		$(document).on('keypress', function(e) {
			if (focused) {
				var $tr = $content.find('.dt-body .dt-body-row--selected');
				if (($tr.length == 0) || !$tr.is(':visible')) {
					switch (e.keyCode) {
						case 38:
						case 40:
							$content.find('.dt-body tr:visible').first().click();
							break;
					}
				} else {
					switch (e.keyCode) {
						case 38:
							$tr.prev().click();
							break;
							
						case 40:
							$tr.next().click();
							break;
					}
				}
			}
		});
	})();
	
	
	
	// Функция вызова обработчика событий таблицы
	function eventCallback(event) {
		return self._callback.call(self, event);
	};
	
	
	
	//--------------------------------------------------------------------
	// Индикатор выполнения процессов
	var process = (function() {
		// Состояние активности индикатора
		var timer = undefined;
		var indicator;
		// Элементы DOM процессинговой области
		var $process = $content.find('.dt-process');
		var $processBg = $process.find('.dt-process-bg');
		var $processInfo = $process.find('.dt-process-info');
		
		// Конструктор
		function create() {
			return {
				start: start,
				stop:  stop
			};
		};
		
		// Обработка изменения размера окна 
		function onResize() {
			$process.height($content.height()).width($content.width());
			$processBg.height($content.height()).width($content.width());
			$processInfo.offset({
				top: ($content.height() - $processInfo.height()) / 2,
				left: ($content.width() - $processInfo.width()) / 2
			});
		};
		
		// Запустить индикатор процесса
		//  - message - сообщение для индикации
		//  - timeout - таймер, после которого индикатор закрывается
		function start(message, timeout) {
			if (timer === undefined) {
				// Установить обработку изменения размеров окна и перетаскивания скролинга 
				$(window).resize(onResize).scroll(onResize);
				
				// Начальное значение прозрачности
				$processBg.fadeTo(0, 0);
				// Установить сообщение 
				$processInfo.html(
					'<div class="dt-process-info-message">' + message + '</div>' +
					'<div class="dt-process-info-percent"></div>' +
					'<div class="dt-process-info-indicator"></div>');
				
				// Отобразить процесс протекания
				$process.show();
				$processBg.show().fadeTo(0, 0.5);
				
				// Включить индикатор
				enabled = true;
				
				// Запустить таймер автоматической остановки индикатора
				timer = setTimeout(stop, (timeout == undefined ? 5000 : timeout));
				
				// Запустить динамическую индикацию
				indicator = setInterval((function() {
					var rise = true;
					var step = 0;
					return function() {
						var text = '';
						if (rise)
							rise = (step++ !== 6);
						else
							rise = (step-- === 0);
						
						for (var i = 0; i < step * 2 + 1; i++)
							text += '.';
						$processInfo.find('.dt-process-info-indicator').html(text);
					};
				})(), 100);
				
				// Установить размеры индикатора процесса
				onResize();
			}
		};

		// Остановить индикатор процесса
		function stop() {
			if (timer !== undefined) {
				// Остановить таймер
				clearTimeout(timer);
				// Остановить динамическую индикацию
				clearInterval(indicator);
				timer = undefined;
				// Скрыть область индикатора
				$process.hide();
				$processBg.hide();
				// Отменить обработчики
				$(window).unbind('resize', onResize).unbind('scroll', onResize);
			}
		};
		
		// Инициализация
		return create();
	})();
	
	
	
	//--------------------------------------------------------------------
	// Объект управления строками таблицы
	this.rows = (function() {
		
		// Регулярное выражение для идентификаторв строки
		var reId = /^dt-\w+-row-([0-9]+)$/i;
		
		// Конструктор
		function create() {
			$content.find('.dt-body tbody').on('click', 'td', function() {
				var $td = $(this);
				var rowIndex = _indexById($td.parent().attr('id'));
				var colIndex = $td.parent().find('td').index($td);
				
				// Вызвать обработчик пользователя о нажатии на ячейку
				eventCallback({
					type: DataTable.Events.FIELD_CLICK,
					rowIndex: rowIndex,
					colIndex: colIndex
				});

			});
				
			$content.find('.dt-body tbody').on('click', 'tr', function() {
				// Строка таблицы
				var $tr = $(this);
				
				// Выделить строку
				$content.find('.dt-body .dt-body-row--selected').removeClass('dt-body-row--selected');
				$tr.addClass('dt-body-row--selected');
				
				// Отправить пользовательский обработчик
				eventCallback({
					type: DataTable.Events.ROW_CLICK,
					rowIndex: _indexById($tr)
				});
			});
			
			return {
				add:      add,
				remove:   remove,
				clear:    clear,
				selected: selected,
				edit:     edit,
				update:   update
			};
		};
		
		// Получить идентификатор строки по ее индексу
		function _idByIndex(index) {
			return 'dt-' + self._options.name + '-row-' + index;
		};
		
		// Получить индекс строки по ее идентификатору
		function _indexById(id) {
			var exec = reId.exec(id);
			if (exec)
				return exec[1] * 1;
			return -1;
		};

		// Добавить строки в таблицу
		function add(rows) {
			var rowCount = self.data.length;
			var fragment = document.createDocumentFragment();
			for (var r = 0; r < rows.length; r++) {
				// Данные строки
				var row = rows[r];
				// Создать строка таблицы DOM
				var tr = document.createElement('tr');
				tr.setAttribute('id', _idByIndex(rowCount + r));
				// Описание строки таблицы
				var rowData = [];
				
				for (var c = 0; c < row.length; c++) {
					// Создать и добавить ячейку таблицы
					var td = document.createElement('td');
					
					// Установить выравнивание
					var align = self._options.columns[c].align;
					if (align)
						td.style.textAlign = align;
					
					// Запросить HTML-строку для отображения значения ячейки
					td.innerHTML = eventCallback({
						type: DataTable.Events.FIELD_SHOW,
						data: row[c]
					});
					
					// Добавить ячейку в строку
					tr.appendChild(td);
					// Добавить описание поля
					rowData.push(row[c]);
				}
				
				// Добавить строку таблицы
				fragment.appendChild(tr);
				// Добавить описание строки таблицы
				self.data.push(rowData);
			}
			$content.find('.dt-body tbody')[0].appendChild(fragment);
		};

		// Удалить строку из таблицы
		function remove(rowIndex) {
			// Удалить строку таблицы из DOM
			$content.find('.dt-body tbody').find('#' + _idByIndex(rowIndex)).remove();
			// Переиндексировать атрибуты
			for (var i = rowIndex + 1; i < self.data.length; i++)
				$(document.getElementById(_idByIndex(i))).attr('id', _idByIndex(i - 1));
			// Удалить описание строки
			self.data.splice(rowIndex, 1);
		};
		
		// Удалить все строки
		function clear() {
			// Удалить данные из таблицы DOM
			$content.find('.dt-body tbody').empty();
			// Удалить данные из описания таблицы
			self.data.length = 0;
		};

		// Установить/Получить признак выделения строки таблицы
		function selected(rowIndex, value) {
			if (rowIndex === undefined) {
				return _indexById($content.find('.dt-body .dt-body-row--selected').attr('id'));
			} else if (value === undefined) {
				return $content.find('.dt-body #' + _idByIndex(rowIndex)).hasClass('dt-body-row--selected');
			} else if (rowIndex >= 0) {
				$content.find('.dt-body #' + _idByIndex(rowIndex)).click();
			}
		};
		
		// Отобразить поле ввода в ячейке
		function edit(rowIndex, colIndex, data) {
			// Найти ячейку для отображения полей ввода
			var $td = $content.find('.dt-body #' + _idByIndex(rowIndex) + ' td:eq(' + colIndex + ')');
			// Поле ввода и функция для полчения значения из этого поля
			var $input, getValue;
			switch (data.type) {
				case DataTable.InputType.INTEGER:
					getValue = (function() {
						// Если значение не число, то выход 
						if (isNaN(data.value)) 
							return;

						// Отобразить текущее значение в поле ввода 
						$td.html('<input type="text" maxlength=20 value="' + data.value + '">');
						
						// Поле ввода 
						$input = $td.find('input');
						// Выделить текст в поле ввода
						$input.select();
						
						// Фильтр ввода для поля 
						if ($input.numberMask) {
							$input.numberMask({
								defaultValueInput: data.value
							});
						}
					
						return function(cancel) {
							var value = (cancel ? undefined : $input.val() * 1);
							if (isNaN(value)) 
								value = undefined;
							return value;
						};
					})();
					break;
					
				case DataTable.InputType.FLOAT:
					getValue = (function() {
						// Если значение не число, то выход 
						if (isNaN(data.value)) 
							return;

						// Отобразить поле ввода 
						$td.html('<input type="text" maxlength=20 value="' + 
							data.value.toFixed(data.decPlaces).replace('.', ',') + '">');
						
						// Поле ввода 
						$input = $td.find('input');
						// Выделить текст в поле ввода
						$input.select();
				
						// Фильтр ввода для поля
						if ($input.numberMask) {
							$input.numberMask({
								type: 'float',
								afterPoint: data.decPlaces,
								decimalMark: ',',
								defaultValueInput: data.value
							});
						}
						
						return function(cancel) {
							var value = (cancel ? undefined : parseFloat($input.val().replace(',', '.')));
							if (isNaN(value))
								value = undefined;
							return value;
						};
					})();
					break;
					
				case DataTable.InputType.ENUM:
					getValue = (function() {
						// Если значение не число, то выход 
						if ((isNaN(data.value)) || (data.items.length <= data.value) || (data.value < 0)) 
							return;

						// Отобразить выпадающий список 
						var inputHTML = '<select>';
						for (var i = 0; i < data.items.length; i++) 
							inputHTML += '<option>' + data.items[i];
						inputHTML += '</select>';
						$td.html(inputHTML);
						
						// Выпадающий список 
						$input = $td.find('select');
						// Текущее значение 
						$input[0].selectedIndex = data.value;
						
						return function(cancel) {
							return (cancel ? undefined : $input[0].selectedIndex);
						};
					})();
					break;
					
				case DataTable.InputType.BOOLEAN:
					getValue = (function() {
						// Отобразить выпадающий список 
						$td.html(
							'<select>' +
								'<option>' + data.falseText + 
								'<option>' + data.trueText +
							'</select>'
						);
						
						// Выпадающий список 
						$input = $td.find('select');
						// Текущее значение 
						$input[0].selectedIndex = (data.value ? 1 : 0);
					
						return function(cancel) {
							return (cancel ? undefined : (($input[0].selectedIndex === 0) ? false : true));
						};
					})();
					break;
					
				default:
					getValue = (function() {
						// Масимальная длина строки 
						var maxLength = data.maxLength;
						if (isNaN(maxLength))
							maxLength = 200;

						// Отобразить поле ввода 
						$td.html('<input type="text" maxlength=' + maxLength +' value="' + data.value + '">');
						
						// Поле ввода
						$input = $td.find('input');
						// Выделить текст в поле ввода
						$input.select();
				
						return function(cancel) {
							return (cancel ? undefined : $input.val().substring(0, maxLength));
						};
					})();
			}
			
			// Функция закрепления результата
			function accept(cancel) {
				// Информировать об изменении значения 
				eventCallback({
					type:  DataTable.Events.FIELD_ACCEPT,
					data:  self.data[rowIndex][colIndex],
					value: getValue(cancel)
				});
				
				// Запросить HTML-код для отображения значения
				$td.html(eventCallback({
					type: DataTable.Events.FIELD_SHOW,
					data: self.data[rowIndex][colIndex]
				}));
			}
			
			 
			$input
				// Обработчик потери фокуса
				.blur(function() { accept(); })
				// Нажатие Enter
				.keypress(function(e) {
					switch (e.keyCode) {
						case 13:
							accept();
							break;
							
						case 27:
							accept(true);
							break;
							
						default:
							e.stopPropagation();
							break;
					}
				})
			
				// Не передавать событие нажатия мыши родительским элементам
				.click(function(e) {
					e.stopPropagation();
				});
			// Установить фокус в поле ввода 
			$input.focus();
		};
		
		// Обновить отображаемые значения в таблице
		function update(columns) {
			function updateField(rowIndex, colIndex) {
				// Запросить HTML-код для отображения значения
				$content.find('.dt-body #' + _idByIndex(rowIndex) + ' td:eq(' + colIndex + ')')
					.html(eventCallback({
						type: DataTable.Events.FIELD_SHOW,
						data: self.data[rowIndex][colIndex]
					}));
			}
			
			for (var r = 0; r < self.data.length; r++) {
				if (columns && (columns.length > 0)) {
					for (var i = 0; i < columns.length; i++)
						updateField(r, columns[i]);
				} else {
					for (var c = 0; c < self.data[r].length; c++)
						updateField(r, c);
				};
			}
		};
		
		// Инициализация
		return create();
	})();
	
	
	
	//--------------------------------------------------------------------
	// Объект управления столбцами таблицы
	this.columns = (function() {
		// Конструктор
		function create() {
			return {
				sort:  sort
			};
		};

		// Установить/Получить сортировку столбца
		function sort(c, value) {
			
		};
		
		// Инициализация
		return create();		
	})();
	
	
	
	//--------------------------------------------------------------------
	// Объект управления контролами таблицы
	this.controls = (function() {
		// Конструктор
		function create() {
			// Обработчик нажатия на кнопку
			$content.find('.dt-controls .dt-controls-item--button').click(function() {
				$button = $(this);
				if (!$button.hasClass('dt-controls-item--disabled')) {
					eventCallback({
						type: DataTable.Events.BUTTON_CLICK,
						name: $button.children('input').val()
					});
				}
			});
			
			// Обработчик выбора в выпадающем списке
			$content.find('.dt-controls .dt-controls-item--select').change(function() {
				eventCallback({
					type: DataTable.Events.SELECT_CHANGE,
					name: $(this).children('input').val()
				});
			});
			
			return {
				enabled: enabled
			};
		};
		
		// Функция получения/изменения активности контрола
		function enabled(name, value) {
			var result = true;
			$content.find('.dt-controls .dt-controls-item').each(function() {
				var control = $(this);
				if (name == control.children('input').val()) {
					if (value === undefined) {
						result = !control.hasClass('dt-controls-item--disabled');
					} else {
						if (value)
							control.removeClass('dt-controls-item--disabled');
						else
							control.addClass('dt-controls-item--disabled');
						control.find('select').prop('disabled', !value);
					}
					return false;
				}
			});
			return result;
		};
		
		// Инициализация
		return create();
	})();
	
	
	
	//--------------------------------------------------------------------
	// Объект управления навигацией по страницам
	this.pagination = (function() {
		// Конструктор
		function create() {
			$content.find('.dt-pagination').on('click', '.dt-pagination-page', function() {
				var $page = $(this);
				// Новая страница
				var page = $page.find('input').val() * 1;
				
				// Запустить индикацию процесса
				process.start('TODO Page load');
				
				// Вызвать пользовательский обработчик
				eventCallback({
					type: DataTable.Events.PAGE_CHANGE,
					page: page,
					callback: function(data) {
						// Удалить все предидущие строки
						self.rows.clear();
						
						// Установить новые данные в таблицу
						self.rows.add(data);
						
						// Обновить значение текущей страницы
						self._options.pagination.page = page;
						// Перерисовать область навигации по страницам
						$content.find('.dt-pagination').html(DataTable.Builder.htmlPagination(self._options.pagination));
						
						// Остановить индикацию процесса
						process.stop();
					}
				});
			});
			return {
				paginate: paginate
			};
		};
		
		// Установить новую разбивку на страницы
		function paginate(pagination) {
			// Обновить разбивку на страницы
			self._options.pagination = pagination;
			// Перерисовать область навигации по страницам
			$content.find('.dt-pagination').html(DataTable.Builder.htmlPagination(pagination));
		};
		
		// Инициализация
		return create();
	})();
	
	
	
	//--------------------------------------------------------------------
	// Объект управления строкой фильтрации
	this.filter = (function() {
		// Конструктор
		function create() {
			// Обработчик нажатия на область фильтрации
			$content.find('.dt-filter').click(function() {
				$(this).find('input').focus();
			});
			
			// Установить обработчик ввода текста в поле фильтрации
			$content.find('.dt-filter input').on('input', DataTable.debounce(function() {
				_search($(this).val());
			}, 500));
			
			return {};
		};
		
		// Функция фильтрации данных в таблице
		function _search(filter) {
			var $trList = $content.find('.dt-body tr');
			if ((filter == '') || (filter == undefined)) {
				$trList.show();
			} else {
				$trList.each(function() {
					var $tr = $(this), show = false;

					$tr.children('td').each(function() {
						show = ($(this).text().indexOf(filter) >= 0);
						return !show;
					});
					
					if (show)
						$tr.show();
					else
						$tr.hide();
				});
			}
		};
		
		// Инициализация
		return create();
	})();
};


// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
// Полезная функция, устранения дребезгов в событиях
DataTable.debounce = function(func, wait, immediate) {
	var timeout = null;
	return function() {
		var context = this;
		clearTimeout(timeout);
		
		timeout = setTimeout(function() {
			timeout = null;
			if (!immediate)
				func.apply(context, arguments);
		}, wait);
		
		if (immediate && !timeout)
			func.apply(context, arguments);
	};
};



// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
// Возможные типы контролов таблицы
DataTable.ControlType = {
	BUTTON : 0,
	SELECT : 1
};



// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
// Возможные типы полей ввода в таблице
DataTable.InputType = {
	/*
	 * {
	 *   type: DataTable.InputType.STRING,
	 *   value: "начальное значение"
	 * }
	 */
	STRING: 0,
	/*
	 * {
	 *   type: DataTable.InputType.INTEGER,
	 *   value: 0
	 * }
	 */
	INTEGER: 1,
	/*
	 * {
	 *   type: DataTable.InputType.FLOAT,
	 *   value: 0.0
	 * }
	 */
	FLOAT: 2,
	/*
	 * {
	 *   type: DataTable.InputType.ENUM,
	 *   value: 0,
	 *   items: ['', '',...]
	 * }
	 */
	ENUM: 3,
	/*
	 * {
	 *   type: DataTable.InputType.BOOLEAN,
	 *   value: true|false,
	 *   falseText: 'Disabled',
	 *   trueText: 'Enabled'
	 * }
	 */
	BOOLEAN: 4
};



// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
// Возможные типы событий
DataTable.Events = {
	/*
	 * Нажатие на поле таблицы
	 * {
	 *   type: DataTable.Events.FIELD_CLICK,
	 *   rowIndex: 4,
	 *   colIndex: 0
	 * }
	 */
	FIELD_CLICK: 0,
	/*
	 * Закрепление данных в поле таблицы
	 * {
	 *   type:  DataTable.Events.FIELD_ACCEPT,
	 *   data:  data[rowIndex][colIndex],
	 *   value: value (в соответствии с DataTable.InputType)
	 * }
	 */
	FIELD_ACCEPT: 1,
	/*
	 * Событие отображения поля таблицы
	 * {
	 *   type: DataTable.Events.FIELD_SHOW,
	 *   data: data[rowIndex][colIndex]
	 * }
	 */
	FIELD_SHOW: 2,
	/*
	 * Событие отображения поля таблицы
	 * {
	 *   type: DataTable.Events.ROW_CLICK,
	 *   rowIndex: 3
	 * }
	 */
	ROW_CLICK: 3,
	/*
	 * Нажатие на элмент управления Button
	 * {
	 *   type: DataTable.Events.BUTTON_CLICK,
	 *   rowIndex: 3
	 * }
	 */
	BUTTON_CLICK: 4,
	/*
	 * Изменение значения в SELECT
	 * {
	 *   type: DataTable.Events.SELECT_CHANGE,
	 *   rowIndex: 3
	 * }
	 */
	SELECT_CHANGE: 5,
	/*
	 * Навигация по страницам
	 * {
	 *   type: DataTable.Events.PAGE_CHANGE,
	 *   page: 1,
	 *   callback: function(data) { // data - данные для добавления в таблицу  }
	 * }
	 */
	PAGE_CHANGE: 6
};



// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
// Возможные языки локализации
DataTable.Language = {
	ENGLISH : 0,
	RUSSIAN : 1
};



// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
// Локализация таблицы
DataTable.Localization = {};
//  - английский язык
DataTable.Localization.english = {
};
//  - русский язык
DataTable.Localization.russian = {
};



// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
// Строитель таблицы
DataTable.Builder = function() {
	this._buffer = [];
	this._index = 0;
};

// Добавление подстроки
DataTable.Builder.prototype.append =  function(text) 
{
	this._buffer[this._index] = text;
	this._index++;
	return this;
};

// Преобразование к строке
DataTable.Builder.prototype.toString = function() 
{
	return this._buffer.join('');
};

// Добавить заголовок таблицы
DataTable.Builder.prototype.appendCaption = function(caption) {
	if (caption) {
		this.append('<div class="dt-caption">')
				.append(caption)
			.append('</div>');
	}
	return this;
};

// Добавить контролы таблицы
DataTable.Builder.prototype.appendControls = function(controls) {
	
	function appendButton(control) {
		this.append('<div class="dt-controls-item dt-controls-item--button" title="' +
				(control.hint ? control.hint : '') + '">');
			this.append('<input type="hidden" value="' + control.name + '">');
			this.append('<span>' + control.caption + '</span>');
		this.append('</div>');
	};
	
	function appendSelect(control) {
		this.append('<div class="dt-controls-item dt-controls-item--select" title="' +
				(control.hint ? control.hint : '') + '">');
			this.append('<input type="hidden" value="' + control.name + '">');
			this.append('<span>' + control.caption + ': </span>');
			this.append('<select>');
				for (var i = 0; i < control.items.length; i++)
					this.append('<option>' + control.items[i]);
			this.append('</select>');
		this.append('</div>');
	};
	
	if (controls) {
		this.append('<div class="dt-controls">');
		
		for (var c = 0; c < controls.length; c++) {
			switch (controls[c].type) {
				case DataTable.ControlType.BUTTON:
					appendButton.call(this, controls[c]);
					break;
					
				case DataTable.ControlType.SELECT:
					appendSelect.call(this, controls[c]);
					break;
			}
		}
		this.appendClear();
		
		this.append('</div>');
	}
	return this;
};

// Добавить строку поиска по таблице
DataTable.Builder.prototype.appendFilter = function(filter) {
	if (filter) {
		this.append('<div class="dt-filter">')
				.append('<div class="dt-filter-label">')
					.append('TODO Поиск по:')
				.append('</div>')
				
				.append('<div class="dt-filter-input">')
					.append('<div class="dt-filter-input-inner">')
						.append('<input type="text" maxlength="100">')
					.append('</div>')
				.append('</div>')
				
				.appendClear()
			.append('</div>');
	}
	return this;
};

// Добавить область навигации по страницам
DataTable.Builder.prototype.appendPagination = function(pagination, onlyContent) {
	if (pagination) {
		if ((pagination.page > pagination.count) || (pagination.page <= 0))
			throw 'TODO';
		
		var start = pagination.page - 3;
		var end = pagination.page + 3;
		if (start <= 0) {
			end += 1 - start;
			start = 1;
		}
		if (end > pagination.count) {
			start -= end - pagination.count;
			end = pagination.count;
			if (start <= 0)
				start = 1;
		}
		
		if (!onlyContent)
			this.append('<div class="dt-pagination">');
		
		this.append('<div class="dt-pagination-info">');
			this.append('TODO Показана страница ' + pagination.page + ' из ' + pagination.count);
		this.append('</div>');
		
		this.append('<div class="dt-pagination-pages">');
		
			if (pagination.page > 1) {
				// К первой странице
				this.append('<span class="dt-pagination-page dt-pagination-page--first"><<');
					this.append('<input type="hidden" value="1">');
				this.append('</span>');
				
				// К предидущей странице
				this.append('<span class="dt-pagination-page dt-pagination-page--prev"><');
					this.append('<input type="hidden" value="' + (pagination.page - 1) + '">');
				this.append('</span>');
			}
			
			if (start > 1)
				this.append('<span class="dt-pagination-page-space">...</span>');
			
			for (var i = start; i <= end; i++) {
				if (i === pagination.page)
					this.append('<span class="dt-pagination-page--current">');
				else 
					this.append('<span class="dt-pagination-page">');
				this.append(i);
				this.append('<input type="hidden" value="' + i + '">');
				this.append('</span>');
			}
			
			if (end < pagination.count)
				this.append('<span class="dt-pagination-page-space">...</span>');
			
			if (pagination.count > pagination.page) {
				// К следующей странице
				this.append('<span class="dt-pagination-page dt-pagination-page--next">>');
					this.append('<input type="hidden" value="' + (pagination.page + 1) + '">');
				this.append('</span>');
				
				// К последней странице
				this.append('<span class="dt-pagination-page dt-pagination-page--last">>>');
					this.append('<input type="hidden" value="' + pagination.count + '">');
				this.append('</span>');
			}
		this.append('</div>');
		
		this.appendClear();
		
		if (!onlyContent)
			this.append('</div>');
	}
	
	return this;
};

// Добавить шапку таблицы
DataTable.Builder.prototype.appendHead = function(columns) {
	// Вычисление общей ширины таблицы
	columns.fullWidth = 0;
	for (var c = 0; c < columns.length; c++) {
		// Поправка минимальной ширины таблицы
		if (columns[c].width < 100)
			columns[c].width = 100;
		columns.fullWidth += columns[c].width;
	}
	
	this.append('<div class="dt-head"><div class="dt-head-inner"><table width="' + columns.fullWidth + '">');
	
	this.append('<colgroup>');
	for (var c = 0; c < columns.length; c++)
		this.append('<col span="1" style="width:' + columns[c].width + 'px;">');
    this.append('</colgroup>');
    
	this.append('<thead><tr>');
	for (var c = 0; c < columns.length; c++)
		this.append('<th>' + columns[c].caption + '</th>');
	this.append('</tr></thead>');
	
	this.append('</table></div></div>');
	return this;
};

// Добавить тело таблицы
DataTable.Builder.prototype.appendBody = function(columns) {
	this.append('<div class="dt-body"><table width="' + columns.fullWidth + '">');
	
	this.append('<colgroup>');
	for (var c = 0; c < columns.length; c++)
		this.append('<col span="1" style="width:' + columns[c].width + 'px;">');
    this.append('</colgroup>');
	
    this.append('<tbody></tbody>');
	this.append('<div class="dt-body-empty">' + 'TODO Empty' + '</div>');
	
	this.append('</table></div>');
	return this;
};

// Индикатор процесса выполнения операций
DataTable.Builder.prototype.appendProcess = function() {
	this.append('<div class="dt-process">')
			.append('<div class="dt-process-bg"></div>')
			.append('<div class="dt-process-info"></div>')
		.append('</div>');
	return this;
};

// <div style="clear:both"></div>
DataTable.Builder.prototype.appendClear = function() {
	this.append('<div class="dt-clear"></div>');
	return this;
};

// Получить html-код таблицы
DataTable.Builder.htmlTable = function(options) {
	var builder = new DataTable.Builder();
	
	// Заголовок таблицы
	builder.appendCaption(options.caption);
	
	// Область управления таблицы
	builder.appendControls(options.controls);
	
	// Шабка таблицы
	builder.appendHead(options.columns);
	// Область данных таблицы
	builder.appendBody(options.columns);
	
	// Область строки фильтрации
	builder.appendFilter(options.filter);
	
	// Область навигации по страницам
	builder.appendPagination(options.pagination);
	
	// Индикатор выполнения операций
	builder.appendProcess();
	
	// HTML-строка с описанием таблицы
	return builder.toString();
};

// Получить html-код таблицы
DataTable.Builder.htmlPagination = function(pagination) {
	var builder = new DataTable.Builder();
	
	// Область навигации по страницам
	builder.appendPagination(pagination, true);
	
	// HTML-строка с описанием таблицы
	return builder.toString();
};