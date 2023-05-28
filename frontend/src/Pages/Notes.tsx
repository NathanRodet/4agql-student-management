import React, { CSSProperties, useState } from 'react';
import { useGradesList } from "../composants/getStudentsGrade";

export default function Classes() {
    const studentId = "63f9416a-a59b-4407-bdc2-d2c5556e633f"; // this can be dynamic
    const { data, loading, error } = useGradesList(studentId);

    if (loading) return <p>Loading...</p>;
    if (error) return <pre>{error.message}</pre>;

 
    const styles: { [key: string]: CSSProperties } = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            fontFamily: 'Arial, sans-serif',
            backgroundColor: '#F7F7F7',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)'
        },
        title: {
            color: '#333',
            marginBottom: '10px'
        },
        classItem: {
            backgroundColor: '#FFF',
            padding: '10px',
            margin: '5px 0',
            borderRadius: '4px',
            boxShadow: '0px 2px 3px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            flexDirection: 'column',
        },
        button: {
            backgroundColor: '#4CAF50',
            color: '#FFF',
            padding: '10px',
            borderRadius: '4px',
            border: 'none',
            cursor: 'pointer',
            marginBottom: '10px'
        },
        topbox : {
            display : "flex",
            columnGap : "20px",
        },
        bottombox : {
            display : "flex",
            columnGap : "20px"
        },
        classSubItem: {
            margin: '5px 0',
        },
    };

    return (
        
        <div style={styles.container}>
            <div style={styles.topbox}>
                <h1 style={styles.title}>Mes notes</h1>
            </div>
            <ul>
                {data.allgradesStudent.map((single : any) => (
                    <li key={single.id} style={styles.classItem}>
                        <div style={styles.classSubItem}>ID de la classe : {single.classe_id}</div>
                        <div style={styles.classSubItem}>Note : {single.note}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
