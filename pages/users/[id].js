import {useRouter} from 'next/router'
import fetch from 'isomorphic-fetch'
import Container from '../../components/Container'

const User = ({user}) => {
console.log(user);
    const router = useRouter();
    const { id } = router.query;

    return(
        <Container>
            <div className="row">
                <div className="col-md-6 offset-md-3 card-center">
                    <img src={user.avatar} alt="" style={{borderRadius:"50%"}} />
                    <div className="card-body">
                        <h3>
                            {user.id}. {user.first_name} {user.last_name}
                        </h3>
                        <p>Email: {user.email}</p>
                    </div>
                </div>
            </div>
        </Container>
    )




}
User.getInitialProps = async (ctx) => {
    // console.log(ctx.query.id)
    const res = await fetch(`https://reqres.in/api/users/${ctx.query.id}`);
    const resJSON = await res.json();
    // console.log(resJSON);
    return { user: resJSON.data };
  };
  
  export default User;