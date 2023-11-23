import { Connect, connect } from "react-redux"
import Home from "../components/Home"
import { addToCart, removeTOCart } from "../services/actions/actions"

const mapStateToProps = state => ({
    cardData: state.cardItems
})

const mapDispatchToProps = dispatch => ({
    addToCartHandler: data => dispatch(addToCart(data)),
    removeTOCartHandler: data => dispatch(removeTOCart(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)

// export default Home