import './UserCard.css'

const userImageStyle = {
    width: '150px',
    borderRadius: '50%',
    marginTop: '30px',
    border: '2px solid black',
}

function UserCard() {
    return (
        <div className="card">
            <img style={userImageStyle} src="https://st3.depositphotos.com/6672868/13701/v/600/depositphotos_137014128-stock-illustration-user-profile-icon.jpg" alt="profile" />
            <section className="user-bio">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque laudantium eveniet eum atque quam magni cum enim id, error consequatur dolor facere possimus eaque officiis maxime omnis? Quasi, maiores asperiores.
            </section>
        </div>
    )
}

export default UserCard