import { useState, useEffect } from "react"

export const useFormControl = (event, isEdit) => {
    const [data, setData] = useState({});
   

    useEffect(() => {
        if (isEdit) {
            setData(event);
        } else if (!isEdit) {
            setData({
                imgUrl: '',
                topic: '',
                location: '',
                date: '',
                time: '',
                description: '',
                address: '',
                email: '',
                phone: ''
            });
        }
    }, [isEdit, event]);

    return [data, setData]
}