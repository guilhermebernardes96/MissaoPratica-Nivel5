
import { NextApiRequest, NextApiResponse } from "next";
import ControleEditora from '../../../classes/controle/ControleEditora'

export default (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        try {
            const editoras = ControleEditora.getEditoras();
            res.status(200).json(editoras);
        } catch (error) {
            res.status(500).json({ error: 'Erro no servidor' });
        }
    } else {
        res.status(405).end();
    }
};