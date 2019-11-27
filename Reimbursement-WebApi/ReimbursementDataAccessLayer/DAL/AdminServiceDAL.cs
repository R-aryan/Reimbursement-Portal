using ReimbursementDataAccessLayer.Models;
using ReimbursementShared.SharedDTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReimbursementDataAccessLayer.DAL
{
    public class AdminServiceDAL
    {
        private ApplicationDbContext _context;
        public List<ReimbursementDataDTO> reimbursementDatas;

        public AdminServiceDAL()
        {
            _context = new ApplicationDbContext();
            reimbursementDatas = new List<ReimbursementDataDTO>();
        }

        public List<ReimbursementDataDTO> GetPendingReimbursementData()
        {
            var result = _context.ReimbursementDatas.Where(c => c.RequestPhase.Equals(ReimbursementStatus.pending))
                .OrderBy(c => c.ClaimDate).ToList();

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
        }


        public ReimbursementDataDTO SaveAllDeclinedClaims(int id, ReimbursementDataDTO val)
        {
            var CustId = _context.ReimbursementDatas.SingleOrDefault(c => c.ID == id);

            CustId.Email = val.Email;
            CustId.ClaimDate = val.ClaimDate;
            CustId.Currency = val.Currency;
            CustId.ReciptAttached = val.ReciptAttached;
            CustId.DateString = val.DateString;
            CustId.ReimbursementType = val.ReimbursementType;
            CustId.RequestPhase = val.RequestPhase;
            CustId.AmountRequested = val.RequestedValue;
            CustId.AmountApproved = val.ApprovedValue;

            _context.SaveChanges();

            return val;
        }

        public List<ReimbursementDataDTO> GetAllDeclinedClaims(string param)
        {
            var result = _context.ReimbursementDatas.Where(c => c.RequestPhase.Equals(param))
                .OrderBy(c => c.ClaimDate).ToList();

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
        }

        public ReimbursementDataDTO SaveAllApprovedClaims(int id, ReimbursementDataDTO value)
        {
            var CustId = _context.ReimbursementDatas.SingleOrDefault(c => c.ID == id);

            CustId.AmountApproved = value.ApprovedValue;
            CustId.RequestPhase = value.RequestPhase;

            _context.SaveChanges();

            return value;
        }
    }
}
