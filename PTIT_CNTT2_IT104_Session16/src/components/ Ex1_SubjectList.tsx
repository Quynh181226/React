import { Component } from 'react'

interface ListSubjectState {
    subjects: string[]
}

const styles = {
    container: {
        width: '400px',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column' as const,
        gap: '10px',
        background: 'black',
        alignItems: 'center'
    },
    title: {
        color: 'white',
        marginBottom: '10px'
    },
    buttonWrapper: {
        width: '100%',
    },
    button: {
        width: '100%',
        padding: '10px',
        background: '#E0F7FA',
        border: '1px solid #72B9D9',
        color: '#3068A1',
        borderRadius: '10px',
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: 500,

    }
}

export class Ex1_SubjectList extends Component<{}, ListSubjectState> {
    constructor(props: {}) {
        super(props)

        this.state = {
            subjects: ['Toán', 'Văn', 'Anh', 'Hóa', 'Sinh'],
        }
    }

    render() {
        return (
            <div style={styles.container}>
                <h2 style={styles.title}>List subject</h2>
                {this.state.subjects.map((subject, index) => (
                    <div style={styles.buttonWrapper} key={index}>
                        <button style={styles.button}>{subject}</button>
                    </div>
                ))}
            </div>
        )
    }
}
