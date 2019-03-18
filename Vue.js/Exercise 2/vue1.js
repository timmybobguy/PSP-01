var app = new Vue({
	el: '#app-1',
		data: {
			numbers: '1,2,3,4,5',
			squared: '',
		},
		methods: {
			last: function (array) {
				return array[array.length - 1];
			},
			squarer: function () {
				var splitted = this.numbers.split(',');
				this.squared = ''
				for (var i=0; i < splitted.length; i++) {
					this.squared += String(Math.pow(splitted[i],2))
					if (splitted[i] !== this.last(splitted)) {
						this.squared += ', '
					}
				}
			}	
		}
})



