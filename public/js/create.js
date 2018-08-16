new Vue({
  el: '.main',
  data: function () {
    return {
      formdata: {
        name: '',
        description: '',
        price: '',
        cover: ''
      },
      error: false,
      success: false,
      errors: []
    }
  },
  computed: {
    isValid: function () {
      const self = this;
      let valid = true
      this.errors = []
      Object.keys(this.formdata).forEach(function(key, i) {
        if (self.formdata[key] === '') {
          self.errors.push(`El campo ${key} no puede ser vacío`)
          valid = false
        }
      })
      return valid
    }
  },
  methods: {
    onRegister: function () {
      console.log('register', this.formdata)
      this.success = false
      this.error = false
      const self = this
      if (this.isValid) {
        axios.post('http://localhost:3000/api/house', this.formdata)
          .then(function (response) {
            console.log(response)
            self.success = true
            self.formdata.name = ''
            self.formdata.description = ''
            self.formdata.cover = ''
            self.formdata.price = ''
          }).catch(function (err) {
            console.error(err)
          })
      } else {
        this.error = true
      }
    }
  }
})