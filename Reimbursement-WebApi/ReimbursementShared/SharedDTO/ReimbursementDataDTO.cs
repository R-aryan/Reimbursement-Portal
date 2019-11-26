using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReimbursementShared.SharedDTO
{
    public class ReimbursementDataDTO
    {
      
        public int ID { get; set; }

      
        public string Email { get; set; }

       
        public string ReimbursementType { get; set; }

        public string Currency { get; set; }

       
        public string RequestedValue { get; set; }

        public string ApprovedValue { get; set; }

      
        public string RequestPhase { get; set; }


        public string ReciptAttached { get; set; }

       
        public string DateString { get; set; }

        public DateTime? ClaimDate { get; set; }
    }
}
