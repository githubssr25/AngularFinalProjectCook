import { Component } from '@angular/core';
import { FullUserDto } from '../models/full-user.dto';
import { AnnouncementDto } from '../models/announcementDto';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyService } from '../services/company.service';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.css']
})
export class AnnouncementsComponent {
  users: FullUserDto[] = [];
  currentUser: any;
  announcements: AnnouncementDto[] = [];
  selectedCompanyId: number | null = null;
  errorMessage: string = '';


  constructor(
    private authService: AuthService,
    private companyService: CompanyService,
    public router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.currentUser = this.authService.getCurrentUser();
    console.log(this.currentUser);
    this.selectedCompanyId = Number(localStorage.getItem('selectedCompanyId'));
    console.log(this.selectedCompanyId);

    this.getAnnouncements();
  }

  
  async fetchUsers(companyId: number) {
    try {
      this.users = await this.companyService.getUsersByCompanyId(companyId);
    } catch (error) {
      console.error('Failed to load users', error);
    }
  }


  async getAnnouncements(): Promise<void> {
    if (this.selectedCompanyId) {
      console.log(this.selectedCompanyId);
      try {
        
        const announcements = await this.companyService.getAnnouncementsByCompanyId(this.selectedCompanyId);
        this.handleAnnouncementsResponse(announcements);
      } catch (error) {
        this.handleError('Failed to fetch announcements', error);
      }
    } else {
      this.errorMessage = 'No company selected.';
    }
  }

  private handleAnnouncementsResponse(announcements: AnnouncementDto[]): void {
    this.announcements = announcements;
  }

  private handleError(message: string, error: any): void {
    console.error(message, error);
    this.errorMessage = message + '. Please try again later.';
  }

}
