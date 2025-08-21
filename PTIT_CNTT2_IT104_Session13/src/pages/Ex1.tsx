type State={
    name?: string
}

const Ex1 = (state: State) => {
   state={
       name: 'Quynh'
   }

    return (
        <h3>
            Full name: {state.name}
        </h3>
    )
}

export default Ex1