using ReimbursementDataAccessLayer.Models;
using ReimbursementShared.SharedDTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReimbursementDataAccessLayer.DAL
{
    public class ReimbursementDALFunctions
    {
        private ApplicationDbContext _context;
        public List<ReimbursementDataDTO> reimbursementDatas;

        public ReimbursementDALFunctions()
        {
            _context = new ApplicationDbContext();
            reimbursementDatas = new List<ReimbursementDataDTO>();
        }
        public IEnumerable<ReimbursementDataDTO> GetAllReimbursementData()
        {
            List<ReimbursementData> res = _context.ReimbursementDatas.ToList();
            //List<ReimbursementDataDTO> rdata = new List<ReimbursementDataDTO>();
            var result = _context.ReimbursementDatas.ToList();

            foreach (var item in result)
            {
                reimbursementDatas.Add(
                    new ReimbursementDataDTO()
                    {
                        Email = item.Email,
                        ID = item.ID,
                        DateString = item.DateString,
                        ClaimDate = item.ClaimDate,
                        Currency = item.Currency,
                        RequestPhase = item.RequestPhase,
                        ReciptAttached = item.ReciptAttached,
                        ReimbursementType = item.ReimbursementType,
                        RequestedValue = item.AmountRequested,
                        ApprovedValue = item.AmountApproved

                    }
                    );
            }

            return reimbursementDatas;

            //return reimbursementDatas;
        }

        public ReimbursementDataDTO SaveAllReimbursementData(ReimbursementDataDTO rd)
        {
            ReimbursementData reimbursementData = new ReimbursementData() {
            Email = rd.Email,
            ReciptAttached = rd.ReciptAttached,
            ReimbursementType = rd.ReimbursementType,
            RequestPhase = "To Be Processed",
            AmountApproved = "0",
            DateString = rd.DateString,
            AmountRequested = rd.RequestedValue,
            ClaimDate = rd.ClaimDate,
            Currency = rd.Currency,
            };


            _context.ReimbursementDatas.Add(reimbursementData);
            _context.SaveChanges();

            return rd;
        }

        public List<ReimbursementDataDTO> GetReimbursementData(string mail)
        {
            var result = _context.ReimbursementDatas.Where(c => c.Email.Equals(mail))
                .OrderBy(c=>c.ClaimDate).ToList();

            foreach(var item in result)
            {
                reimbursementDatas.Add(
                    new ReimbursementDataDTO()
                    {
                        Email=item.Email,
                        ID=item.ID,
                        DateString=item.DateString,
                        ClaimDate=item.ClaimDate,
                        Currency=item.Currency,
                        RequestPhase=item.RequestPhase,
                        ReciptAttached=item.ReciptAttached,
                        ReimbursementType=item.ReimbursementType,
                        RequestedValue=item.AmountRequested,
                        ApprovedValue=item.AmountApproved

                    }
                    );
            }

            return reimbursementDatas;
        }

        public ReimbursementDataDTO SaveAllEditedReimbursementData(int id, ReimbursementDataDTO val)
        {
            var CustId = _context.ReimbursementDatas.SingleOrDefault(c => c.ID == id);

            //CustId.ID = val.ID;
            CustId.Email = val.Email;
            CustId.ClaimDate = val.ClaimDate;
            CustId.Currency = val.Currency;
            CustId.ReciptAttached = val.ReciptAttached;
            CustId.DateString = val.DateString;
            CustId.ReimbursementType = val.ReimbursementType;
            CustId.RequestPhase = "To Be Processed";
            CustId.AmountRequested = val.RequestedValue;
            CustId.AmountApproved = "0";

            _context.SaveChanges();

            return val;
        }

        public int DeleteDataById(int id)
        {
            var CustId = _context.ReimbursementDatas.SingleOrDefault(c => c.ID == id);

            _context.ReimbursementDatas.Remove(CustId);
            _context.SaveChanges();
            return 1;
        }
    }
}
