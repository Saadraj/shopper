import { NextApiRequest, NextApiResponse } from "next";
import furnitureItems from "../../component/Api/furniture.json";

const items = furnitureItems.items;

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const currentPage = Number(req.query.page) || 1;
    const itemsPerPage = 12;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const totalPage = Math.floor((items.length + 1) / itemsPerPage);
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);
    res.json({ totalPage, currentItems });
};
