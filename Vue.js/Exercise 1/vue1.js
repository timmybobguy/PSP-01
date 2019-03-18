var app = new Vue({
	el: '#app-1',
		data: {
			message: '',
			string: '',
			finished: false,
			numberOfChars: 0,
		},
		methods: {
			addToList: function (message) {
				this.string += message
				if (this.message === '.') {
					this.finished = true
					console.log('fullstop')
				}
				if (this.finished === false) {
					this.numberOfChars += 1
					console.log('here')
				} 
				this.message = ''
				
			}	
		}
})
