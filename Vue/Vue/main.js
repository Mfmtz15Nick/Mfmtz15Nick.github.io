Vue.component('product',{
    props:{
        premium: {
            type: Boolean,
            required: true
        }
    },
    template:`
    <div class="product">
            <div class="product-image">
                <img v-bind:src="image" alt="">
            </div>
            <div class="product-info">
                <h1>{{title}} </h1>
                <p>{{description}} </p>
                <p v-if="inventory > 10">In Stock</p>
                <p v-else-if="inventory<=10 && inventory>0">Almost sold out!</p>
                <p v-else>Out of Stock</p>
                <a v-bind:href="link">More products like this.</a>
                <p v-if="onSale">On sale!</p>
                <p>Shipping: {{shipping}} </p>
                <ul>
                    <li v-for="detail in details">{{detail}} </li>
                </ul>
                <div v-for="(variant, index) in variants" 
                    :key="variant.variantId"
                    class="color-box"
                    :style="{backgroundColor: variant.variantColor} "
                    @mouseover="updateProduct(index)">
                </div>
                <button v-on:click="addToCart" 
                    :disabled="!inStock"
                    :class="{disabledButton: !inStock}">Add to Cart</button>
                <button class="less-btn" v-on:click="lessToCart">Less to Cart</button>
                
            </div>
            </div>
    `,
    data(){
        return  {products: 'Socks',
        description: 'A pair of warm, fuzzy socks',
        selectedVariant: 0,
        link:'https://www.happysocks.com/gl/',
        inventory: 100,
        brand: 'Vue Mastery',
        onSale: false,
        details: ["80% Cotton", "20% Polyester", "Gender-Neutral"],
        variants: [
            {
                variantId: "2234",
                variantColor: "Green",
                variantImage: "./assets/vmSocks-green-onWhite.jpg",
                variantQuantity: 10
            },
            {
                variantId: "2235",
                variantColor: "Blue",
                variantImage: "./assets/vmSocks-blue-onWhite.jpg",
                variantQuantity: 10
            }
        ]}
    },
    methods:{
        addToCart: function(){
            this.$emit('add-to-cart',this.variants[this.selectedVariant].variantId)
        },
        updateProduct: function(index){
            this.selectedVariant = index
            console.log(index)
        },
        lessToCart: function(){
            this.$emit('less-to-cart',this.variants[this.selectedVariant].variantId)
        }
    
    },
    computed:{
        title(){
            return this.brand + ' ' + this.products
        },
        image(){
            return this.variants[this.selectedVariant].variantImage
        },
        inStock(){
            return this.variants[this.selectedVariant].variantQuantity
        },
        shipping(){
            if(this.premium){
                return "Free"
            }
            return 2.99
        }
    },
    
   
       
    
})

var app = new Vue({
    //Con esto nos conectaremos el DOM
    el:"#app",
    data:{
        premium: false,
        cart: []
    },
    methods:{
        updateCart(id){
            this.cart.push(id)
        }
    }
    
    
})