import React from "react";
import getAll from "@/app/services/userSrvices";
import Card from '@/app/components/card'
import User from '@/app/types/userType'

const page = async () => {
    try {
        const data = await getAll();

        return (
            <div className="flex flex-wrap gap-4 p-4">
                {data.map((user: User) => (
                    <Card key={user.id} user={user} />
                ))}
            </div>
        );
    } catch (error) {
        console.error({message: 'error in the page loading' , error})
        return(
            <div>oops, there is problem un the users page...</div>
        )
    }
};
export default page


