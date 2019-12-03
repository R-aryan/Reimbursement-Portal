using ReimbursementBusinessLayer.BusinessService;
using ReimbursementShared.SharedDTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace Reimbursement_Portal.Controllers
{
    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
    public class ReimbursementController : ApiController
    {
        ReimbursementService ts;
        public ReimbursementController()
        {
           ts = new ReimbursementService();
        }
        // GET api/reimbursement
        public IEnumerable<ReimbursementDataDTO> Get()
        {
            
            return ts.GetReimbursementData();
        }

        // Post api/reimbursement
        [HttpPost]
        public ReimbursementDataDTO PostData(ReimbursementDataDTO rd)
        {
            //ReimbursementDataDTO success;
            if (!ModelState.IsValid)
            {
                throw new HttpResponseException(HttpStatusCode.BadRequest);
            }

            ReimbursementDataDTO dataDTO= ts.SaveReimbursementData(rd);
            return rd;

        }

        // Get api/reimbursement/id
        [HttpGet]
        public List<ReimbursementDataDTO>GetData(string id)
        {
            var rdata= ts.GetReimbursementData(id);

            return rdata;
        }

        // PUT api/reimbursement/id
        [HttpPut]
        public ReimbursementDataDTO PutData(int id, ReimbursementDataDTO value)
        {
            if (!ModelState.IsValid)
            {
                throw new HttpResponseException(HttpStatusCode.BadRequest);
            }

            var rdata = ts.SaveEditedReimbursementData(id,value);

            return value;

        }

        // Delete //api/reimbursement/id
        [HttpDelete]
        public int DeleteData(int id)
        {
            if (!ModelState.IsValid)
            {
                throw new HttpResponseException(HttpStatusCode.BadRequest);
            }

            return ts.DeleteRecordsFromDB(id);

        }


    }
}
