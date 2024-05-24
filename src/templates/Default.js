import Container from '@material-ui/core/Container'
import Header from '../partials/Header/Header'

import { makeStyles } from '@material-ui/core/styles'

//JSS = JavaScript Style Sheet
const useStyles = makeStyles(() => ({ 
    container: {
        padding: '15px 0'
    }
}))

const Default = ({ children }) => {
    const classes = useStyles()
    return (
        <>
            <Header />
            <Container className={classes.container}>
                {children}
            </Container>
        </>
    )
}

export default Default