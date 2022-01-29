import { NextApiRequest, NextApiResponse } from "next";
import digitalItems from "../../component/Api/digital.json";

const items = digitalItems.items;

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const currentPage = Number(req.query.page) || 1;
    const itemsPerPage = 12;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const totalPage = Math.floor((items.length + 1) / itemsPerPage);
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);
    res.json({ totalPage, currentItems });
};
