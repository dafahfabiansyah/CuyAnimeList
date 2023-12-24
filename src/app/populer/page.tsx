import React from 'react';
import HeaderMenu from '@/components/Utilities/HeaderMenu';
import Pagination from '@/components/Utilities/Pagination';

const page = () => {
  // try {
  //   const [page, setPage] = useState(1);
  //   const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?page=${page}`);
  //   // console.log(response);
  //   const TopAnime = response.data;
  //   // console.log(response.data);
  // } catch (error) {
  //   console.error('Error fetching anime data:', error);
    return (
      <>
        <HeaderMenu />
        <div>Populer page</div>
        <Pagination />
      </>
    );
  }
export default page;
