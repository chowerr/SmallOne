import img from './btc3.jpg'
export default{
    template:`
        <div>
            <img :src="imgSrc"/>
        </div>
    `,
    data () {
        return {
            imgSrc:img
        }
    }
}