import {data} from "../assets/data/data.js";

export const comentarService = {
    getComentar: async function () {
        try {
            const response = await fetch(data.api);
            return await response.json();
        } catch (error) {
            return {error: error && error.message};
        }
    },

addComentar: async function ({id, name, status, message, date, color}) {
    const comentar = {
        id,
        name,
        status,
        message,
        date,
        color,
    };

    try {
        const response = await fetch(data.api, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(comentar),
        });

        // Cek apakah response benar-benar berisi JSON
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
            return await response.json();
        } else {
            const text = await response.text();
            return { error: "Response bukan JSON", raw: text };
        }

    } catch (error) {
        console.error('Post error:', error);
        return { error: error.message };
    }
}
};