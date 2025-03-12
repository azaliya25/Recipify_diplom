"use client";

import React from "react";

const ProfileUser = () => {
    // const [user, setUser] = useState({ id: 0, name: "", email: "" });
    // const [formData, setFormData] = useState({ name: "", email: "" });
    // const userId = Number(localStorage.getItem("id"));

    // useEffect(() => {
    //     const fetchUser = async () => {
    //         if (!userId) {
    //             // console.error("ID пользователя отсутствует");
    //             return;
    //         }
    //         try {
    //             const response = await fetch(`http://localhost:8080/users/${userId}`);
    //             if (!response.ok) throw new Error("Ошибка при загрузке пользователя");
    //             const data = await response.json();
    //             console.log("Полученные данные:", data);
    //             setUser(data);
    //             setFormData({ name: data.Name || "", email: data.Email || "" });
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     };
    //     fetchUser();
    // }, [userId]);

    // const handleInputChange = (e) => {
    //     setFormData({ ...formData, [e.target.name]: e.target.value });
    // };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const response = await fetch(`http://localhost:8080/users/${userId}`, {
    //             method: "PUT",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify({ Name: formData.name, Email: formData.email }),
    //         });
    //         if (!response.ok) throw new Error("Ошибка при обновлении данных пользователя");
    //         const updatedUser = await response.json();
    //         setUser(updatedUser);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };

    return (
        <div className="flex flex-col h-full relative">
            <div className="flex flex-col ml-[150px] mt-[80px]">
                <h2 className="text-black text-[35px] font-['ArsenalB']">Личный кабинет</h2>
                <form
                    // onSubmit={handleSubmit}
                    className="flex flex-col justify-center text-[#F9F1E6] max-w-[510px] max-h-[300px] gap-[25px] h-full pt-20"
                >
                    <input
                        type="text"
                        name="name"
                        placeholder="NAME"
                        // value={formData.name || ""}
                        // onChange={handleInputChange}
                        className="bg-inherit border-b-black border border-x-0 border-t-0 placeholder-black font-['ArsenalR'] text-black focus:border-none"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="EMAIL"
                        // value={formData.email || ""}
                        // onChange={handleInputChange}
                        className="bg-inherit border-b-black border border-x-0 border-t-0 placeholder-black font-['ArsenalR'] text-black focus:border-none"
                    />
                    <input
                        type="submit"
                        value="Сохранить"
                        className="flex justify-center bg-black border-black border rounded-[20px] max-w-[280px] mt-11 py-[5px] px-[40px] text-[#F9F1E6] text-[15px] font-['ArsenalB'] cursor-pointer hover:transition-[15s] hover:bg-[#131313]"
                    />
                </form>
            </div>
        </div>
    );
};

export default ProfileUser;
