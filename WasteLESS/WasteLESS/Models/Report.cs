using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WasteLESS.Models
{
    public class Report
    {
        public int NrItems { get; set; }
        public int ItemsExpired { get; set; }
        public int ItemsExpiredBeforeConsumption { get; set; }
    }
}
