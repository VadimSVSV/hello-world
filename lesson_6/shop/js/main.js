let PRODUCTS_NAMES = ['Processor', 'Display', 'Notebook', 'Mouse', 'Keyboard', 'HeadPhones', 'Microphone']

        let PRICES = [100, 120, 1000, 15, 18, 10, 20]

        let IDS = [0, 1, 2, 3, 4, 5, 6]
 

        let products = []


        // function createProductsDTO (arr) {
        
	//     arr = []
        
	//     let length = IDS.length

        
	//     for (let i = 0; i < length; i++) {
        
	//         arr.push (createProduct (i))
        
	//     }
        
	// }

        
function createProduct (index) {
            
return {
                
product_name: PRODUCTS_NAMES [index],

                price: PRICES [index],

                id_product: IDS [index],

                img: 'https://placehold.it/200x150',

                createTemplate () {

                    return `

                        <div class="product-item" data-id="${this.id_product}">

                            <img src="${this.img}" alt="${this.product_name}">

                            <div class="desc">

                                <h3>${this.product_name}</h3>

                                <p> ${this.price} </p>

                                <button class="buy-btn"

                                    data-id="${this.id_product}"

                                    data-name="${this.product_name}"

                                    data-price="${this.price}">

                                    Купить

                                </button>

                            </div>

                        </div>

                    `

                }

            }

        }


        let catalog = {

            items: [],

            container: '.products',

            cart: null,


            init () {

                this._fetchItems ()

                this._render ()


                // document.querySelector (this.container).addEventListener ('click', (evt) => {

                //     if (evt.target.classList.contains ('buy-btn')) {

                //         let product = evt.target.dataset

                //         console.log (`

                //             Куплен ${product.name}, по цене ${+product.price}$

                //         `)

                //     }

                // })

            },

            _fetchItems () {

                let length = IDS.length


                for (let i = 0; i < length; i++) {

                    this.items.push (createProduct (i))

                }

            },

            _render () {

                let container = document.querySelector (this.container)

                let domString = ''


                this.items.forEach (item => {

                    domString += item.createTemplate ()

                })

                container.innerHTML = domString

            }

        }


        catalog.init ()
        