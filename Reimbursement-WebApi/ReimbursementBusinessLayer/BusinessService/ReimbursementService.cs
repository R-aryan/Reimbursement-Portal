using ReimbursementDataAccessLayer.DAL;
using ReimbursementShared.SharedDTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReimbursementBusinessLayer.BusinessService
{
    public class ReimbursementService
    {
        ReimbursementDALFunctions resdal;

        public ReimbursementService()
        {
            resdal= new ReimbursementDALFunctions();
        }

        public IEnumerable<ReimbursementDataDTO> GetReimbursementData()
        {

            return resdal.GetAllReimbursementData();
        }

        public ReimbursementDataDTO SaveReimbursementData(ReimbursementDataDTO rd)
        {
            return resdal.SaveAllReimbursementData(rd);
        }

        public List<ReimbursementDataDTO> GetReimbursementData(string mail)
        {
            return resdal.GetReimbursementData(mail);
        }

        public ReimbursementDataDTO SaveEditedReimbursementData(int id, ReimbursementDataDTO val)
        {

            return resdal.SaveAllEditedReimbursementData(id, val);
        }

        public int DeleteRecordsFromDB(int id)
        {
            resdal.DeleteDataById(id);
            return 1;
        }
    }
}
