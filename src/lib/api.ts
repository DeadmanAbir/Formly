interface FormDetail {
    content: string;
    userId: string;
}


export const insertPost = async (
    accessToken: string,
    details: FormDetail,
  ) => {
    try {
      const response = await fetch(
        `/api/insert-form`,
        {
          method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json',
        //     Authorization: `Bearer ${accessToken}`,
        //   },
          body: JSON.stringify(details),
        },
      );
  
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Failed to insert form:', error);
      throw error;
    }
  };
  